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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delay }}
            className={cn(
                "group relative overflow-hidden rounded-sm bg-white/5 p-10 backdrop-blur-[12px] transition-colors duration-500",
                className
            )}
        >
            {/* Golden Thread Border */}
            <div className="absolute inset-0 border border-meraas-gold/10 group-hover:border-meraas-gold/40 transition-colors duration-500 z-20 pointer-events-none" />
            
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-30 flex flex-col h-full">
                {icon && (
                    <div className="mb-8 text-meraas-gold text-4xl opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out">
                        {icon}
                    </div>
                )}

                <h3 className="font-spectral text-3xl font-light text-meraas-black mb-4 group-hover:text-meraas-gold transition-colors duration-300">
                    {title}
                </h3>

                <p className="font-dm-sans text-meraas-gray text-base leading-relaxed tracking-wide flex-grow">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};