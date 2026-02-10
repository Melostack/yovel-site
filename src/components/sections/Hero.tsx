import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 pt-20">
             {/* Low-contrast texture background */}
            <div className="absolute inset-0 z-0 bg-meraas-bg">
                 <div className="absolute inset-0 opacity-[0.03] bg-[url('/assets/yovel-cup.webp')] bg-cover bg-center mix-blend-multiply" />
            </div>
            
            <div className="relative z-10 w-full max-w-[90%] mx-auto text-center flex flex-col items-center">
                
                {/* Mask Reveal Title - Mobile Optimized Viewport Threshold */}
                <div className="overflow-hidden mb-2">
                    <motion.h1 
                        initial={{ y: "100%" }}
                        whileInView={{ y: "0%" }}
                        viewport={{ margin: "-10%" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="font-spectral font-light text-[15vw] md:text-[10vw] leading-[0.9] tracking-tight text-meraas-black"
                    >
                        A Alquimia da
                    </motion.h1>
                </div>
                <div className="overflow-hidden mb-12">
                    <motion.h1 
                        initial={{ y: "100%" }}
                        whileInView={{ y: "0%" }}
                        viewport={{ margin: "-10%" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="font-spectral font-light text-[15vw] md:text-[10vw] leading-[0.9] tracking-tight text-meraas-black italic"
                    >
                        <span className="text-meraas-gold">Liquidez Global</span>
                    </motion.h1>
                </div>

                <div className="overflow-hidden">
                    <motion.p 
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ margin: "-10%" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                        className="font-dm-sans text-meraas-charcoal/80 text-lg md:text-xl max-w-xl mx-auto leading-relaxed tracking-wide"
                    >
                        Transformamos ativos locais em poder de compra internacional. 
                        Sem spread, sem fronteiras, apenas o fluxo puro do seu capital.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ margin: "-10%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-12 flex flex-col md:flex-row gap-6 w-full md:w-auto"
                >
                    <button className="px-10 py-5 bg-meraas-black text-white font-dm-sans font-bold tracking-widest text-xs uppercase rounded-full hover:bg-meraas-gold transition-all duration-500 shadow-2xl hover:shadow-meraas-gold/20">
                        Iniciar Diagnóstico
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
