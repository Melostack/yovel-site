import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    className?: string;
    delay?: number;
}

export const ServiceCard = ({
    title,
    description,
    icon,
    className,
    delay = 0,
}: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg hover:border-gold-alchemist/50 transition-colors duration-300 group",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col h-full">
                {icon && (
                    <div className="mb-6 text-gold-alchemist text-3xl group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                )}

                <h3 className="font-sora text-xl font-bold text-white mb-3 group-hover:text-gold-alchemist transition-colors">
                    {title}
                </h3>

                <p className="font-sans text-neutral-400 text-sm leading-relaxed flex-grow">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};
