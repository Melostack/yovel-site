import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-4 mx-auto",
                className
            )}
        >
            {children}
        </div>
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
    return (
        <Reveal width="100%" className={cn("row-span-1 rounded-xl group/bento transition duration-200", className)}>
             <div
                className={cn(
                    "h-full rounded-xl p-4 justify-between flex flex-col space-y-4",
                    "bg-meraas-bg-alt",
                    "border border-[rgba(0,0,0,0.05)]", // Subtle border
                    "shadow-sm hover:shadow-md", // Soft to medium shadow
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1", // Lift -4px (approx -1 in tailwind scale, close enough for 'sutil')
                    "relative overflow-hidden"
                )}
            >
                {/* Border Shimmer Gradient (Fio de Ouro) */}
                <div className="absolute inset-0 rounded-xl border border-transparent pointer-events-none [background:linear-gradient(45deg,rgba(171,107,24,0.3),transparent_40%)] opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
                
                {header}
                <div className="group-hover/bento:translate-x-2 transition duration-200 mt-auto relative z-10">
                    {icon}
                    <div className="font-spectral font-bold mb-2 mt-4 text-xl md:text-2xl leading-tight text-meraas-black">
                        {title}
                    </div>
                    <div className="font-dm-sans font-medium text-sm md:text-base leading-relaxed text-meraas-gray">
                        {description}
                    </div>
                </div>
            </div>
        </Reveal>
    );
};
