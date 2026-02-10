import { motion } from 'framer-motion';
import designTokens from '@/theme/design_tokens.json';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
    const { stagger_delay } = designTokens.tokens.animations;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: { transition: { staggerChildren: stagger_delay } }
            }}
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-4 mx-auto",
                className
            )}
            style={{ gap: designTokens.tokens.spacing.bento_gap }}
        >
            {children}
        </motion.div>
    );
};

interface BentoGridItemProps {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
}

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: BentoGridItemProps) => {
    const { colors, effects, spacing, animations } = designTokens.tokens;

    // Clip-path reveal animation ("blooming")
    const revealVariants = {
        hidden: {
            clipPath: "inset(100% 0 0 0)",
            opacity: 0,
            y: 20
        },
        visible: {
            clipPath: "inset(0 0 0 0)",
            opacity: 1,
            y: 0,
            transition: {
                duration: animations.reveal_duration,
                ease: animations.reveal_ease as any
            }
        }
    };

    return (
        <motion.div
            variants={revealVariants}
            className={cn(
                "group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                backgroundColor: colors.card_bg,
                borderColor: colors.card_border,
                backdropFilter: `blur(${effects.backdrop_blur})`,
                boxShadow: effects.card_shadow,
                borderRadius: spacing.border_radius,
                padding: spacing.card_padding,
                background: effects.glassmorphism_gradient,
                borderWidth: '1px',
                borderStyle: 'solid',
            }}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 mt-auto">
                {icon}
                <div
                    className="font-sora font-extrabold mb-2 mt-4 text-xl md:text-2xl leading-tight"
                    style={{ color: colors.text_manifesto }}
                >
                    {title}
                </div>
                <div
                    className="font-sans font-medium text-sm md:text-base leading-relaxed"
                    style={{ color: colors.text_muted }}
                >
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
