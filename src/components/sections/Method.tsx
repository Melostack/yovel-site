import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import tokens from "../../design_tokens.json";

export const Method = () => {
    const { slots, card_bg, card_border, stagger_delay } = tokens;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger_delay,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const items = [
        // Slot 1: Title
        {
            header: (
                <div className="flex flex-col justify-center h-full p-6">
                    <h2 className={slots.slot_1.typography}>O Método Yovel</h2>
                </div>
            ),
            className: "md:col-span-2 md:row-span-1",
        },
        // Slot 2: Glass Feature
        {
            header: (
                <div className="relative h-full flex items-center justify-center p-6">
                    <div className={`absolute inset-0 bg-white opacity-[${slots.slot_2.opacity}]`} />
                    <p className="font-sora text-xl text-white z-10">Glassmorphism Feature</p>
                </div>
            ),
            className: "md:col-span-1 md:row-span-1",
        },
        // Slot 3: Image
        {
            header: (
                <img
                    src={slots.slot_3.src}
                    alt={slots.slot_3.alt}
                    className="w-full h-full object-cover rounded-xl"
                />
            ),
            className: "md:col-span-1 md:row-span-2",
        },
        // Slot 4: CTA
        {
            header: (
                <div className="flex flex-col items-center justify-center h-full p-6">
                    <button className={`px-6 py-3 rounded-full font-bold ${slots.slot_4.bg} ${slots.slot_4.text} hover:opacity-90 transition-opacity`}>
                        Conheça Mais
                    </button>
                </div>
            ),
            className: "md:col-span-2 md:row-span-1",
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden">
            {/* Background gradient for depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                <BentoGrid className="max-w-4xl mx-auto">
                    {items.map((item, i) => (
                        <motion.div key={i} variants={itemVariants} className={item.className}>
                            <BentoGridItem
                                header={item.header}
                                className={`${card_bg} ${card_border} min-h-[200px]`}
                            />
                        </motion.div>
                    ))}
                </BentoGrid>
            </motion.div>
        </section>
    );
};
