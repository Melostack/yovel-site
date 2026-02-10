import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextureLayer } from "../ui/TextureLayer";

export const ExchangeEngineering = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Parallax effect

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-meraas-bg relative overflow-hidden">
            <TextureLayer opacity={0.6} />
            
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                
                {/* Left: Content */}
                <div>
                    <div className="mb-4 overflow-hidden">
                        <motion.span 
                            initial={{ y: "100%" }}
                            whileInView={{ y: "0%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block font-dm-sans text-meraas-gold font-bold tracking-[0.2em] text-xs uppercase"
                        >
                            Engenharia Financeira
                        </motion.span>
                    </div>
                    
                    <h2 className="font-spectral text-5xl md:text-6xl font-light text-meraas-black mb-8 leading-[1.1]">
                        Recupere 15% do seu <br />
                        <span className="italic text-meraas-charcoal/80">patrimônio de viagem</span>
                    </h2>

                    <p className="font-dm-sans text-meraas-gray text-lg leading-relaxed mb-8 max-w-md">
                        O sistema bancário tradicional cobra 5.38% de IOF + 4% de spread. 
                        Nossa estrutura de <strong>Stablecoins</strong> reduz esse custo para <strong>1.1%</strong>.
                    </p>

                    <div className="flex gap-8 border-t border-meraas-charcoal/10 pt-8">
                        <div>
                            <span className="block font-spectral text-4xl text-meraas-black">5.38%</span>
                            <span className="text-xs font-dm-sans text-meraas-gray uppercase tracking-widest">Cartão Black</span>
                        </div>
                        <div>
                            <span className="block font-spectral text-4xl text-meraas-gold italic">1.1%</span>
                            <span className="text-xs font-dm-sans text-meraas-gray uppercase tracking-widest">Método Yovel</span>
                        </div>
                    </div>
                </div>

                {/* Right: Visual (Tech + Old Money Fusion) */}
                <div className="relative perspective-[1000px]">
                    <motion.div 
                        style={{ y }}
                        className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm border border-meraas-gold/20 bg-meraas-bg shadow-2xl"
                    >
                        {/* Base Texture: Marble */}
                        <div className="absolute inset-0 opacity-50 mix-blend-multiply">
                             <TextureLayer opacity={0.8} />
                        </div>

                        {/* Tech Layer: Graph */}
                        <img 
                            src="/assets/yovel-grafico-minimalista.jpg" 
                            alt="Comparativo de Câmbio" 
                            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 grayscale contrast-125"
                        />
                        
                        {/* Overlay Glass / Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50" />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-meraas-bg via-transparent to-transparent" />
                    </motion.div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-meraas-gold/5 rounded-full blur-3xl z-0 mix-blend-multiply" />
                </div>

            </div>
        </section>
    );
};