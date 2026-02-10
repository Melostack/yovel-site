import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export const Hero = () => {
    // Letter stagger animation variants
    const sentenceVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.05, // 0.05s delay per letter/word
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const headline = "Onde o Capital Encontra a ";
    const highlight = "Liberdade.";

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
             {/* Background with parallax effect simulated or simple absolute for now */}
            <div className="absolute inset-0 z-0 bg-[url('/assets/yovel-cup.webp')] bg-cover bg-center opacity-10 mix-blend-overlay grayscale" />
            
            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
                
                <motion.h1 
                    className="font-spectral text-5xl md:text-7xl font-bold tracking-tight mb-6 text-meraas-black"
                    variants={sentenceVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {headline.split("").map((char, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {char}
                        </motion.span>
                    ))}
                    <br />
                    <span className="text-meraas-gold">
                        {highlight.split("").map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </span>
                </motion.h1>

                <Reveal width="100%" delay={0.4}>
                    <p className="font-dm-sans text-meraas-charcoal/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto">
                        Orquestramos sua estratégia financeira global. Otimização cambial,
                        acesso exclusivo e um lifestyle sem fronteiras.
                    </p>
                </Reveal>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                   <Reveal delay={0.6}>
                        <button className="px-8 py-4 bg-meraas-black text-white font-dm-sans font-bold rounded-full hover:bg-meraas-gold transition-all duration-300 shadow-xl">
                            Descobrir o Método Yovel
                        </button>
                    </Reveal>
                    <Reveal delay={0.7}>
                        <button className="px-8 py-4 bg-transparent border border-meraas-charcoal/20 text-meraas-charcoal font-dm-sans font-bold rounded-full hover:bg-meraas-black hover:text-white transition-all duration-300">
                            Falar com Concierge
                        </button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
