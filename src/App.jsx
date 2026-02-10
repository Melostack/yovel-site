import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from 'lenis'
import { BentoGrid, BentoGridItem } from "./components/ui/BentoGrid";
import { ServiceCard } from "./components/ui/ServiceCard";
import { Hero } from "./components/sections/Hero";
import { Method } from "./components/sections/Method";
import { ExchangeEngineering } from "./components/sections/ExchangeEngineering";
import { InvestmentPerformance } from "./components/sections/InvestmentPerformance";
import { NoiseOverlay } from "./components/ui/NoiseOverlay";
import { TextureLayer } from "./components/ui/TextureLayer";
import { LightLeak } from "./components/ui/LightLeak";
import { cn } from "./lib/utils";

// --- Dicionário de Traduções ---
const translations = {
  pt: {
    hero_headline: "Onde o Capital Encontra a <span class='text-gold-alchemist'>Liberdade.</span>",
    hero_subheadline: "Orquestramos sua estratégia financeira global. Otimização cambial, acesso exclusivo e um lifestyle sem fronteiras.",
    hero_cta: "Descobrir o Método Yovel",
    problem_title: "A Fricção Global",
    problem_desc: "Taxas ocultas e burocracia não são custos de vida. São falhas de design que nós corrigimos.",
    method_title: "O Método Yovel",
    method_desc: "Dois pilares de otimização para desbloquear seu potencial financeiro.",
    step1_title: "Otimização Cambial",
    step1_desc: "Eliminamos o spread abusivo e o IOF, recuperando em média 15% do seu orçamento.",
    step2_title: "Poder de Compra",
    step2_desc: "Transformamos economia em acesso: Salas VIP, passagens otimizadas e upgrades.",
    partner_title: "Parcerias Estratégicas",
    partner_desc: "Parceria com Confins para entregar tarifas aéreas exclusivas.",
    testim_quote: "“A Yovel não entrega apenas um câmbio melhor; entrega uma experiência de viagem mais inteligente.”",
    testim_author: "Patricia Brambila, Cidadã Global",
    invest_title: "Investimento em Sucesso",
    invest_desc: "Nossa remuneração é uma participação no valor que geramos para você. Sem ganho, sem custo.",
    founder_quote: "“Meu objetivo é destravar um nível de liberdade que você não sabia ser possível.”",
    founder_name: "Matheus Melo, Fundador",
    final_cta: "Pronto para o Upgrade?",
    final_btn: "Agendar Diagnóstico",
  },
  en: {
    hero_headline: "Where Capital Meets <span class='text-gold-alchemist'>Freedom.</span>",
    hero_subheadline: "We orchestrate your global financial strategy. Currency optimization, exclusive access, and a borderless lifestyle.",
    hero_cta: "Discover the Yovel Method",
    problem_title: "The Global Friction",
    problem_desc: "Hidden fees and bureaucracy aren't costs of living. They are design flaws we fix.",
    method_title: "The Yovel Method",
    method_desc: "Two pillars of optimization to unlock your financial potential.",
    step1_title: "Currency Optimization",
    step1_desc: "We eliminate abusive spreads and fees, recovering an average of 15% of your budget.",
    step2_title: "Purchasing Power",
    step2_desc: "We turn savings into access: VIP Lounges, optimized airfare, and upgrades.",
    partner_title: "Strategic Partnerships",
    partner_desc: "Partnership with Confins to deliver exclusive airfare rates.",
    testim_quote: "“Yovel doesn't just deliver a better exchange rate; it delivers a smarter travel experience.”",
    testim_author: "Patricia Brambila, Global Citizen",
    invest_title: "Investment in Success",
    invest_desc: "Our compensation is a share of the value we generate for you. No gain, no cost.",
    founder_quote: "“My goal is to unlock a level of freedom you didn't know was possible.”",
    founder_name: "Matheus Melo, Founder",
    final_cta: "Ready for the Upgrade?",
    final_btn: "Schedule Diagnosis",
  },
};

function App() {
  const [language, setLanguage] = useState("pt");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  const t = (key) => translations[language][key] || key;

  return (
    <div className="min-h-screen bg-meraas-bg text-meraas-charcoal selection:bg-meraas-gold selection:text-white overflow-x-hidden font-dm-sans">
      <NoiseOverlay />
      <TextureLayer opacity={0.3} />
      <LightLeak />

      {/* Navigation / Language */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-meraas-bg/80 backdrop-blur-[52px] border-b border-meraas-gold/10 transition-all duration-500">
        <div className="flex items-center gap-2">
            <img src="/assets/logo_yovel.svg" alt="Yovel" className="h-8 w-auto invert-0 opacity-90" />
        </div>
        <div className="flex gap-6">
          <button
            onClick={() => setLanguage("pt")}
            className={cn("text-[10px] font-bold tracking-[0.2em] transition-colors uppercase font-dm-sans", language === 'pt' ? "text-meraas-gold" : "text-meraas-gray hover:text-meraas-black")}
          >
            PT
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={cn("text-[10px] font-bold tracking-[0.2em] transition-colors uppercase font-dm-sans", language === 'en' ? "text-meraas-gold" : "text-meraas-gray hover:text-meraas-black")}
          >
            EN
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      <ExchangeEngineering />

      {/* Problem Section */}
      <section className="py-32 px-6 bg-meraas-bg-dark text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-dm-sans text-sm text-meraas-gold uppercase tracking-[0.2em] mb-4"
          >
            {t('problem_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-spectral text-3xl md:text-4xl font-light text-white leading-snug"
          >
            {t('problem_desc')}
          </motion.p>
        </div>
      </section>

      <Method />

      <InvestmentPerformance />

      {/* Testimonial Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-meraas-bg">
        <div className="absolute inset-0 bg-meraas-gold/5 -skew-y-3 transform origin-left" />
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <img src="/assets/testimonial-client.jpeg" alt="Client" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="text-6xl text-meraas-gold mb-6">“</div>
            <h3 className="font-spectral text-2xl md:text-3xl font-light leading-relaxed mb-6 text-meraas-black">
              {t('testim_quote')}
            </h3>
            <p className="font-dm-sans text-meraas-gold font-bold tracking-widest text-sm uppercase">
              {t('testim_author')}
            </p>
          </div>
        </div>
      </section>

import { ConciergePortal } from "./components/sections/ConciergePortal";

// ... inside App component ...

      {/* Investment & Founder */}
      <section className="py-32 px-6 bg-meraas-bg-dark text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <ServiceCard
            title={t('invest_title')}
            description={t('invest_desc')}
            icon={<span className="text-2xl">💎</span>}
          />
          <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="font-spectral italic text-xl text-neutral-300 mb-6">{t('founder_quote')}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-800 overflow-hidden">
                <img src="/assets/your-photo.JPG" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <span className="font-dm-sans font-bold text-sm text-white">{t('founder_name')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Portal */}
      <ConciergePortal />

    </div>
  );
}

export default App;
