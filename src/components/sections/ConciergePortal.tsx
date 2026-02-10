import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export const ConciergePortal = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setIsSubmitted(true), 1500);
    };

    return (
        <section className="py-32 px-6 bg-meraas-bg-dark relative overflow-hidden text-white">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[url('/assets/partner-background.png')] bg-cover bg-center opacity-10 mix-blend-overlay grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-meraas-bg-dark via-transparent to-meraas-bg-dark/80" />
            
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-fragment-mono text-meraas-gold text-xs tracking-[0.2em] uppercase mb-4 block"
                    >
                        Acesso Restrito • Q1 2026
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-spectral text-4xl md:text-6xl font-light text-white leading-tight"
                    >
                        Solicite sua <span className="italic text-meraas-gold">Aliança Estratégica</span>
                    </motion.h2>
                </div>

                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.form 
                            key="form"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            onSubmit={handleSubmit}
                            className="glass-card p-8 md:p-12 rounded-sm backdrop-blur-[52px] bg-white/5 border border-white/10 max-w-2xl mx-auto"
                        >
                            <div className="space-y-8">
                                <div className="group relative">
                                    <label className="block font-spectral text-lg text-meraas-gray-light mb-2 group-focus-within:text-meraas-gold transition-colors">Nome Completo</label>
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full bg-transparent border-b border-white/10 py-3 font-fragment-mono text-white focus:outline-none focus:border-meraas-gold transition-colors placeholder:text-white/20"
                                        placeholder="Ex: Matheus Melo"
                                    />
                                </div>

                                <div className="group relative">
                                    <label className="block font-spectral text-lg text-meraas-gray-light mb-2 group-focus-within:text-meraas-gold transition-colors">Patrimônio Líquido Global</label>
                                    <select 
                                        className="w-full bg-transparent border-b border-white/10 py-3 font-fragment-mono text-white focus:outline-none focus:border-meraas-gold transition-colors appearance-none"
                                        required
                                    >
                                        <option value="" className="bg-meraas-bg-dark text-gray-500">Selecione uma faixa...</option>
                                        <option value="tier1" className="bg-meraas-bg-dark">€ 50k - € 250k</option>
                                        <option value="tier2" className="bg-meraas-bg-dark">€ 250k - € 1M</option>
                                        <option value="tier3" className="bg-meraas-bg-dark">Acima de € 1M (Private Office)</option>
                                    </select>
                                </div>

                                <div className="group relative">
                                    <label className="block font-spectral text-lg text-meraas-gray-light mb-2 group-focus-within:text-meraas-gold transition-colors">Objetivo Principal</label>
                                    <textarea 
                                        rows={3}
                                        className="w-full bg-transparent border-b border-white/10 py-3 font-fragment-mono text-white focus:outline-none focus:border-meraas-gold transition-colors placeholder:text-white/20 resize-none"
                                        placeholder="Ex: Otimização de IOF para compra de imóvel na Toscana..."
                                    />
                                </div>

                                <div className="pt-8 flex justify-center">
                                    <button 
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                        className="relative px-12 py-5 bg-white text-meraas-black font-dm-sans font-bold text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-transform duration-300 hover:scale-105"
                                    >
                                        <span className="relative z-10 mix-blend-difference text-white">Iniciar Protocolo</span>
                                        <motion.div 
                                            animate={{ 
                                                scale: isHovering ? 1.5 : 0,
                                                opacity: isHovering ? 1 : 0
                                            }}
                                            className="absolute inset-0 bg-meraas-black rounded-full z-0"
                                            style={{ originX: 0.5, originY: 0.5 }}
                                        />
                                    </button>
                                </div>
                            </div>
                        </motion.form>
                    ) : (
                        <motion.div 
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20 bg-white/5 backdrop-blur-[52px] rounded-sm border border-meraas-gold/20 max-w-2xl mx-auto"
                        >
                            <div className="w-20 h-20 bg-meraas-gold/20 rounded-full mx-auto mb-8 flex items-center justify-center border border-meraas-gold/50">
                                <span className="text-3xl">🗝️</span>
                            </div>
                            <h3 className="font-spectral text-3xl text-white mb-4">Sua solicitação foi enviada ao Alquimista.</h3>
                            <p className="font-fragment-mono text-meraas-gray-light text-sm max-w-md mx-auto">
                                Protocolo gerado: <span className="text-meraas-gold">#YVL-{Math.floor(Math.random() * 9000) + 1000}</span>
                                <br />
                                Nosso concierge entrará em contato via canal seguro em até 24h.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
