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
                "grid grid-cols-1 md:grid-cols-3 auto-rows-[20rem] gap-6",
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

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: animations.fade_duration } }
            }}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 justify-between flex flex-col space-y-4",
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
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-300 text-xs">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
