import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { motion } from "framer-motion";

export const Method = () => {
    // Content directly from RESEARCH.md (The Italy Dossier)
    const items = [
        {
            title: "TOSCANA SANS FRICÇÃO",
            description: "Imagine pagar sua Villa na Toscana sem os 5.38% de IOF. Nossa estrutura reduz o custo para 1.1%, pagando o jantar no 'La Pergola' com a economia.",
            header: (
                <div className="flex-1 w-full h-full min-h-[12rem] rounded-sm bg-meraas-bg-dark relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/assets/partner-background-desenho.png')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 border border-meraas-gold/10 group-hover:border-meraas-gold/30 transition-colors duration-500" />
                </div>
            ),
            icon: <span className="text-4xl mb-4 block font-spectral italic text-meraas-gold">01</span>,
            className: "md:col-span-4 md:row-span-2",
        },
        {
            title: "ACIS: ACESSO IMEDIATO",
            description: "Transformamos stablecoins (USDC) em Euros instantâneos no seu cartão global. Adeus casas de câmbio.",
            header: (
                <div className="flex-1 w-full h-full min-h-[8rem] rounded-sm bg-meraas-bg-alt relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[url('/assets/yovel-card-preview.png')] bg-contain bg-no-repeat bg-center opacity-90 transition-transform duration-500 group-hover:rotate-3" />
                     <div className="absolute inset-0 border border-meraas-gold/10 group-hover:border-meraas-gold/30 transition-colors duration-500" />
                </div>
            ),
            icon: <span className="text-4xl mb-4 block font-spectral italic text-meraas-gold">02</span>,
            className: "md:col-span-2 md:row-span-1",
        },
        {
            title: "LIFESTYLE CURATION",
            description: "De Roma a Milão, nosso concierge financeiro garante que seus pagamentos sejam aceitos em qualquer Michelin.",
            header: (
                <div className="flex-1 w-full h-full min-h-[8rem] rounded-sm bg-meraas-bg-dark border border-meraas-gold/10 relative overflow-hidden group">
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-meraas-gold/5 rounded-full blur-3xl group-hover:bg-meraas-gold/10 transition-colors duration-500" />
                </div>
            ),
            icon: <span className="text-4xl mb-4 block font-spectral italic text-meraas-gold">03</span>,
            className: "md:col-span-2 md:row-span-1",
        },
    ];

    return (
        <section className="py-32 px-4 md:px-8 bg-meraas-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 md:flex justify-between items-end">
                    <div className="md:w-1/2">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-meraas-gold font-dm-sans text-xs tracking-[0.2em] uppercase mb-4 block font-bold"
                        >
                            Pilares de Execução
                        </motion.span>
                        <h2 className="font-spectral text-5xl md:text-7xl font-light text-meraas-black leading-[0.9] tracking-tight">
                            O MÉTODO <br />
                            <span className="italic text-meraas-gold">YOVEL.</span>
                        </h2>
                    </div>
                    <div className="md:w-1/3 mt-8 md:mt-0">
                        <p className="text-meraas-gray text-lg leading-relaxed font-dm-sans">
                            Não é sobre "economizar no cafezinho". É sobre reestruturar a engenharia financeira da sua vida global para desbloquear a verdadeira liberdade geográfica.
                        </p>
                    </div>
                </div>

                <BentoGrid className="max-w-7xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};