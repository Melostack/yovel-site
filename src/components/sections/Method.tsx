import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import designTokens from "@/theme/design_tokens.json";

export const Method = () => {
    const { colors } = designTokens.tokens;

    const items = [
        {
            title: "OTIMIZAÇÃO CAMBIAL",
            description: "O sistema financeiro tradicional cobra taxas que você não vê. Nós eliminamos o spread abusivo e o IOF, recuperando em média 15% do seu orçamento global.",
            header: (
                <div className="flex-1 w-full h-full min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2548&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                </div>
            ),
            icon: <span className="text-5xl mb-4 block">💰</span>,
            className: "md:col-span-4 md:row-span-2",
        },
        {
            title: "PODER DE COMPRA",
            description: "Transformamos economia em acesso: Salas VIP, upgrades e status.",
            header: (
                <div className="flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-gold-alchemist/20 to-neutral-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
            ),
            icon: <span className="text-5xl mb-4 block">✈️</span>,
            className: "md:col-span-2 md:row-span-1",
        },
        {
            title: "PARCERIAS ESTRATÉGICAS",
            description: "Acesso exclusivo a tarifas aéreas corporativas através de nossa parceria com Confins.",
            header: (
                <div className="flex-1 w-full h-full min-h-[8rem] rounded-xl bg-neutral-900 border border-white/5 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gold-alchemist/10 rounded-full blur-3xl" />
                </div>
            ),
            icon: <span className="text-5xl mb-4 block">🤝</span>,
            className: "md:col-span-2 md:row-span-1",
        },
    ];

    return (
        <section className="py-32 px-4 md:px-8 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-neutral-900/50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-24 md:flex justify-between items-end">
                    <div className="md:w-1/2">
                        <span className="text-gold-alchemist font-mono text-sm tracking-widest uppercase mb-4 block">Manifesto</span>
                        <h2 className="font-sora text-5xl md:text-7xl font-extrabold text-white leading-[0.9] tracking-tighter">
                            O MÉTODO <br />
                            <span style={{ color: colors.highlight }}>YOVEL.</span>
                        </h2>
                    </div>
                    <div className="md:w-1/3 mt-8 md:mt-0">
                        <p className="text-neutral-400 text-lg leading-relaxed font-light">
                            Não é sobre "economizar no cafezinho". É sobre reestruturar a engenharia financeira da sua vida global para desbloquear liberdade geográfica.
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
