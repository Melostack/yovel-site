import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";

export const Method = () => {

    const items = [
        {
            title: "Otimização Cambial",
            description: "Eliminamos o spread abusivo e o IOF, recuperando em média 15% do seu orçamento.",
            header: <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800" />,
            icon: <span className="text-4xl">💰</span>,
            className: "md:col-span-2",
        },
        {
            title: "Poder de Compra",
            description: "Transformamos economia em acesso: Salas VIP, passagens otimizadas e upgrades.",
            header: <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gold-alchemist/20 to-neutral-900" />,
            icon: <span className="text-4xl">✈️</span>,
            className: "md:col-span-1",
        },
        {
            title: "Parcerias Estratégicas",
            description: "Parceria com Confins para entregar tarifas aéreas exclusivas.",
            header: <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/5" />,
            icon: <span className="text-4xl">🤝</span>,
            className: "md:col-span-3",
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden">
            {/* Background gradient for depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="font-sora text-4xl font-bold mb-4 text-white">O Método Yovel</h2>
                    <p className="text-neutral-400 max-w-xl">Dois pilares de otimização para desbloquear seu potencial financeiro.</p>
                </div>

                <BentoGrid className="max-w-4xl mx-auto">
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
