import { motion } from "framer-motion";

export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const, // Custom ease from Framer
            },
        },
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
            {/* Background with parallax effect simulated or simple absolute for now */}
            <div className="absolute inset-0 z-0 bg-[url('/assets/yovel-cup.png')] bg-cover bg-center opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-transparent to-deep-black z-0" />

            <motion.div
                className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    className="font-sora text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-neutral-200 to-neutral-500"
                >
                    Onde o Capital Encontra a <br />
                    <span className="text-gold-alchemist">Liberdade.</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="font-sans text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
                >
                    Orquestramos sua estratégia financeira global. Otimização cambial,
                    acesso exclusivo e um lifestyle sem fronteiras.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
                >
                    <button className="px-8 py-4 bg-gold-alchemist text-deep-black font-sora font-bold rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                        Descobrir o Método Yovel
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-sora font-bold rounded-full hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
                        Falar com Concierge
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};
