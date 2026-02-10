import { motion } from "framer-motion";
import { PerformanceChart } from "@/components/ui/PerformanceChart";
import { Reveal } from "@/components/ui/Reveal";

export const InvestmentPerformance = () => {
    return (
        <section className="py-32 px-6 bg-meraas-bg-dark text-white relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-meraas-gold/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                
                {/* Text Content */}
                <div className="space-y-12">
                    <Reveal>
                        <h2 className="font-spectral text-4xl md:text-5xl font-light leading-tight text-white">
                            A Preservação de Capital é a <span className="text-meraas-gold italic">Arte da Permanência</span>.
                        </h2>
                    </Reveal>

                    <div className="space-y-8">
                        <Reveal delay={0.2}>
                            <div>
                                <h3 className="font-dm-sans text-sm font-bold tracking-[0.2em] text-meraas-gold uppercase mb-3">
                                    Eficiência Tributária
                                </h3>
                                <p className="font-spectral text-lg text-white/70 leading-relaxed">
                                    Estruturas offshore desenhadas para minimizar o impacto fiscal legalmente, 
                                    permitindo que seu patrimônio cresça sem o atrito de bitributações desnecessárias.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div>
                                <h3 className="font-dm-sans text-sm font-bold tracking-[0.2em] text-meraas-gold uppercase mb-3">
                                    Crescimento Composto
                                </h3>
                                <p className="font-spectral text-lg text-white/70 leading-relaxed">
                                    Otimização de liquidez e acesso a instrumentos globais que superam 
                                    a volatilidade local, garantindo um legado sólido para gerações.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.4}>
                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <span className="block font-fragment-mono text-3xl text-white mb-1">$4.2M+</span>
                                <span className="font-dm-sans text-xs text-white/40 uppercase tracking-widest">Ativos Otimizados</span>
                            </div>
                            <div>
                                <span className="block font-fragment-mono text-3xl text-white mb-1">12%</span>
                                <span className="font-dm-sans text-xs text-white/40 uppercase tracking-widest">Eficiência Média</span>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Chart Visualization */}
                <div className="relative">
                     <Reveal delay={0.5} width="100%">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl h-[450px] w-full overflow-hidden shadow-2xl">
                            <PerformanceChart />
                        </div>
                     </Reveal>
                     
                     {/* Decorative Elements */}
                     <div className="absolute -bottom-10 -left-10 w-24 h-24 border border-meraas-gold/20 rounded-full" />
                </div>

            </div>
        </section>
    );
};
