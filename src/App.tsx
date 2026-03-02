import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Star,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  TrendingDown,
  Sparkles,
  Briefcase,
  Menu,
  X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// WhatsApp CTA — substitua pelo seu número real
const WHATSAPP_NUMBER = '5531999999999';
const WHATSAPP_MSG = encodeURIComponent('Olá! Gostaria de agendar meu diagnóstico financeiro com a Yovel.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

// Hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Navigation Component with Mobile Menu
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header>
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between bg-yovel-dark/80 backdrop-blur-md" role="navigation" aria-label="Navegação principal">
          <a href="/" className="text-xl md:text-2xl font-display font-bold text-yovel-text-primary tracking-tight" aria-label="Yovel - Página inicial">
            YOVEL
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#metodo" className="text-sm text-yovel-text-secondary hover:text-yovel-accent transition-colors">Método</a>
            <a href="#beneficios" className="text-sm text-yovel-text-secondary hover:text-yovel-accent transition-colors">Benefícios</a>
            <a href="#depoimentos" className="text-sm text-yovel-text-secondary hover:text-yovel-accent transition-colors">Depoimentos</a>
            <a href="#preco" className="text-sm text-yovel-text-secondary hover:text-yovel-accent transition-colors">Preço</a>
          </div>

          <div className="flex items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block pill-button-outline text-xs" aria-label="Agendar diagnóstico pelo WhatsApp">
              Agendar Diagnóstico
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-yovel-text-primary min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-yovel-dark/95 backdrop-blur-lg transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => scrollToSection('metodo')}
            className="text-2xl font-display text-yovel-text-primary hover:text-yovel-accent transition-colors"
          >
            Método
          </button>
          <button
            onClick={() => scrollToSection('beneficios')}
            className="text-2xl font-display text-yovel-text-primary hover:text-yovel-accent transition-colors"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection('depoimentos')}
            className="text-2xl font-display text-yovel-text-primary hover:text-yovel-accent transition-colors"
          >
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection('preco')}
            className="text-2xl font-display text-yovel-text-primary hover:text-yovel-accent transition-colors"
          >
            Preço
          </button>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pill-button-primary text-base mt-4 inline-block text-center min-h-[48px] flex items-center justify-center">
            Agendar Diagnóstico
          </a>
        </div>
      </div>
    </>
  );
}

// Section 1: Hero - Mobile Optimized
function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const cta = ctaRef.current;
    const cards = cardsRef.current;
    const bg = bgRef.current;

    if (!section || !headline || !cta || !cards || !bg) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(bg, { opacity: 0 }, { opacity: 1, duration: 0.6 })
        .fromTo(headline.querySelectorAll('.word'),
          { y: isMobile ? 16 : 24, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.04, duration: 0.9 },
          0.2)
        .fromTo(cta,
          { y: isMobile ? 12 : 18, scale: 0.96, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.6 },
          0.55)
        .fromTo(cards.children,
          { y: isMobile ? 30 : 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
          0.65);

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: isMobile ? '+=100%' : '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            gsap.set([headline, cta, cards], { opacity: 1, x: 0, y: 0 });
            gsap.set(bg, { scale: 1, opacity: 1 });
          }
        }
      });

      // EXIT phase (70% - 100%)
      scrollTl.fromTo(headline,
        { y: 0, opacity: 1 },
        { y: isMobile ? '-10vh' : '-18vh', opacity: 0, ease: 'power2.in' },
        0.7)
        .fromTo(cta,
          { y: 0, opacity: 1 },
          { y: isMobile ? '-8vh' : '-12vh', opacity: 0, ease: 'power2.in' },
          0.72)
        .fromTo(cards,
          { y: 0, opacity: 1 },
          { y: isMobile ? '10vh' : '15vh', opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(bg,
          { scale: 1, opacity: 1 },
          { scale: 1.06, opacity: 0.85, ease: 'power2.in' },
          0.7);

    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="section-pinned z-10">
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/hero_night_sky.jpg"
          alt="Céu noturno estrelado — Yovel Concierge Financeiro"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 vignette-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-yovel-dark/30 via-transparent to-yovel-dark/60" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pt-16">
        <div ref={headlineRef} className="text-center px-4" style={{ width: 'min(92vw, 1100px)' }}>
          <h1 className="heading-display text-yovel-text-primary mb-4 md:mb-6" style={{ fontSize: 'clamp(24px, 8vw, 72px)' }}>
            <span className="word inline-block">DESBLOQUEIE</span>{' '}
            <span className="word inline-block">UMA</span>{' '}
            <span className="word inline-block">VIDA</span>{' '}
            <span className="word inline-block">SEM</span>{' '}
            <span className="word inline-block">FRONTEIRAS.</span>
          </h1>
          <p className="text-yovel-text-secondary text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 md:mb-8 px-2">
            Nós orquestramos a estratégia financeira. Você vive o upgrade.
          </p>
        </div>

        <a ref={ctaRef} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pill-button-primary text-sm md:text-base glow-accent mb-8 inline-flex items-center gap-2 min-h-[48px]" aria-label="Agendar diagnóstico pelo WhatsApp">
          <MessageCircle className="w-4 h-4" />
          Agendar Meu Diagnóstico
        </a>

        {/* Cards - Stacked on mobile, side by side on desktop */}
        <div ref={cardsRef} className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 w-full max-w-4xl">
          <div className="glass-card p-4 md:p-6 flex-1">
            <h3 className="font-display font-bold text-yovel-text-primary text-base md:text-lg mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yovel-accent" />
              Estratégia Personalizada
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-xs md:text-sm text-yovel-text-secondary">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yovel-accent mt-0.5 flex-shrink-0" />
                <span>Câmbio otimizado (sem IOF)</span>
              </li>
              <li className="flex items-start gap-2 text-xs md:text-sm text-yovel-text-secondary">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yovel-accent mt-0.5 flex-shrink-0" />
                <span>Acesso a salas VIP</span>
              </li>
              <li className="flex items-start gap-2 text-xs md:text-sm text-yovel-text-secondary">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yovel-accent mt-0.5 flex-shrink-0" />
                <span>Passagens com melhor custo</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-4 md:p-6 flex-1">
            <h3 className="font-display font-bold text-yovel-text-primary text-base md:text-lg mb-3">
              A Confiança de Quem Vive Sem Fronteiras
            </h3>
            <p className="text-xs md:text-sm text-yovel-text-secondary leading-relaxed">
              Clientes Yovel recuperam em média <span className="text-yovel-accent font-semibold">15%</span> do orçamento de viagem.
            </p>
            <div className="mt-3 pt-3 border-t border-yovel-accent/20">
              <span className="label-wide text-yovel-accent/80 text-[10px]">Atendimento Concierge Global</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 2: Problem - Mobile Optimized
function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const microLineRef = useRef<HTMLSpanElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: isMobile ? '+=100%' : '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(headlineRef.current,
        { y: isMobile ? '-20vh' : '-35vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0)
        .fromTo(subheadlineRef.current,
          { y: isMobile ? '20vh' : '35vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.05)
        .fromTo(microLineRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out' },
          0.15)
        .fromTo(bgRef.current,
          { scale: 1.08, opacity: 0.7 },
          { scale: 1, opacity: 1, ease: 'power2.out' },
          0);

      // EXIT (70% - 100%)
      scrollTl.fromTo(headlineRef.current,
        { y: 0, opacity: 1 },
        { y: isMobile ? '-10vh' : '-18vh', opacity: 0, ease: 'power2.in' },
        0.7)
        .fromTo(subheadlineRef.current,
          { y: 0, opacity: 1 },
          { y: isMobile ? '10vh' : '18vh', opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(microLineRef.current,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.75)
        .fromTo(bgRef.current,
          { scale: 1, opacity: 1 },
          { scale: 1.06, opacity: 0.8, ease: 'power2.in' },
          0.7);

    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} id="problema" className="section-pinned z-20">
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/city_aerial_01.jpg"
          alt="Vista aérea da cidade à noite"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-yovel-dark/60" />
        <div className="absolute inset-0 vignette-overlay" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pt-16">
        <h2
          ref={headlineRef}
          className="heading-display text-yovel-text-primary text-center px-4 mb-6"
          style={{
            width: 'min(95vw, 1200px)',
            fontSize: 'clamp(20px, 6vw, 64px)'
          }}
        >
          SUA VIDA É GLOBAL. SEU SISTEMA FINANCEIRO NÃO É.
        </h2>

        <div className="text-center px-4 max-w-2xl">
          <p ref={subheadlineRef} className="text-yovel-text-secondary text-sm md:text-base lg:text-lg leading-relaxed mb-4">
            Você já sentiu que paga uma "taxa de expatriado" invisível? Cada vez que seu dinheiro cruza uma fronteira, o atrito — taxas ocultas, burocracia, câmbio desfavorável — desgasta seu capital e limita seu potencial.
          </p>
          <span ref={microLineRef} className="text-yovel-accent text-xs md:text-sm font-medium">
            Esta fricção não é um custo de vida. É uma falha de design. E nós a consertamos.
          </span>
        </div>
      </div>
    </section>
  );
}

// Section 3: Method - Mobile Optimized
function MethodSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: isMobile ? '+=100%' : '+=140%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(titleRef.current,
        { y: isMobile ? '-15vh' : '-18vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0)
        .fromTo(card1Ref.current,
          { x: isMobile ? 0 : '-50vw', y: isMobile ? '30vh' : 0, opacity: 0, scale: 0.92 },
          { x: 0, y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0)
        .fromTo(card2Ref.current,
          { y: isMobile ? '40vh' : '60vh', opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0.08)
        .fromTo(card3Ref.current,
          { x: isMobile ? 0 : '50vw', y: isMobile ? '30vh' : 0, opacity: 0, scale: 0.92 },
          { x: 0, y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0.12)
        .fromTo(bgRef.current,
          { scale: 1.06 },
          { scale: 1, ease: 'power2.out' },
          0);

      // EXIT (70% - 100%)
      scrollTl.fromTo(titleRef.current,
        { y: 0, opacity: 1 },
        { y: isMobile ? '-8vh' : '-10vh', opacity: 0, ease: 'power2.in' },
        0.7)
        .fromTo(card1Ref.current,
          { x: 0, y: 0, opacity: 1 },
          { x: isMobile ? 0 : '-18vw', y: isMobile ? '10vh' : 0, opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(card2Ref.current,
          { y: 0, opacity: 1 },
          { y: isMobile ? '10vh' : '-12vh', opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(card3Ref.current,
          { x: 0, y: 0, opacity: 1 },
          { x: isMobile ? 0 : '18vw', y: isMobile ? '10vh' : 0, opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(bgRef.current,
          { scale: 1, opacity: 1 },
          { scale: 1.06, opacity: 0.8, ease: 'power2.in' },
          0.7);

    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} id="metodo" className="section-pinned z-30">
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/airport_tarmac_night.jpg"
          alt="Pista de aeroporto à noite"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-yovel-dark/70" />
        <div className="absolute inset-0 vignette-overlay" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pt-16">
        <h2
          ref={titleRef}
          className="heading-display text-yovel-text-primary text-center px-4 mb-6 md:mb-10"
          style={{ fontSize: 'clamp(18px, 5vw, 48px)' }}
        >
          NOSSO MÉTODO: DA OTIMIZAÇÃO AO UPGRADE.
        </h2>

        {/* Cards - Vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 px-4">
          <div ref={card1Ref} className="glass-card p-4 md:p-6 flex flex-row md:flex-col items-center gap-3 md:gap-4 w-full md:w-auto md:min-w-[200px]">
            <div className="text-3xl md:text-5xl">💰</div>
            <div className="text-left md:text-center">
              <h3 className="font-display font-bold text-yovel-text-primary text-base md:text-xl">Dinheiro</h3>
              <p className="text-yovel-text-secondary text-xs md:text-sm">Capital parado em taxas.</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <ArrowRight className="w-6 h-6 text-yovel-accent/70" />
            <ArrowRight className="w-6 h-6 text-yovel-accent/70" />
          </div>
          <div className="md:hidden flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-yovel-accent/70 rotate-90" />
          </div>

          <div ref={card2Ref} className="glass-card p-4 md:p-6 flex flex-row md:flex-col items-center gap-3 md:gap-4 w-full md:w-auto md:min-w-[200px] border-yovel-accent/40">
            <div className="text-3xl md:text-5xl">🔑</div>
            <div className="text-left md:text-center">
              <h3 className="font-display font-bold text-yovel-accent text-base md:text-xl">Yovel</h3>
              <p className="text-yovel-text-secondary text-xs md:text-sm">Engenharia financeira.</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <ArrowRight className="w-6 h-6 text-yovel-accent/70" />
            <ArrowRight className="w-6 h-6 text-yovel-accent/70" />
          </div>
          <div className="md:hidden flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-yovel-accent/70 rotate-90" />
          </div>

          <div ref={card3Ref} className="glass-card p-4 md:p-6 flex flex-row md:flex-col items-center gap-3 md:gap-4 w-full md:w-auto md:min-w-[200px]">
            <div className="text-3xl md:text-5xl">✈️</div>
            <div className="text-left md:text-center">
              <h3 className="font-display font-bold text-yovel-text-primary text-base md:text-xl">Lifestyle</h3>
              <p className="text-yovel-text-secondary text-xs md:text-sm">Experiência elevada.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 4: Step 1 - Gateway - Mobile Optimized
function Step1Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: isMobile ? '+=100%' : '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(labelRef.current,
        { y: '-10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0)
        .fromTo(headlineRef.current,
          { x: isMobile ? '-30vw' : '-55vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0)
        .fromTo(cardRef.current,
          { x: isMobile ? '30vw' : '55vw', opacity: 0, rotateY: isMobile ? 5 : 10 },
          { x: 0, opacity: 1, rotateY: 0, ease: 'power2.out' },
          0.08)
        .fromTo(bgRef.current,
          { scale: 1.06, opacity: 0.8 },
          { scale: 1, opacity: 1, ease: 'power2.out' },
          0);

      // EXIT (70% - 100%)
      scrollTl.fromTo(labelRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.7)
        .fromTo(headlineRef.current,
          { x: 0, opacity: 1 },
          { x: isMobile ? '-8vw' : '-12vw', opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(cardRef.current,
          { x: 0, opacity: 1 },
          { x: isMobile ? '8vw' : '12vw', opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(bgRef.current,
          { scale: 1, opacity: 1 },
          { scale: 1.06, opacity: 0.8, ease: 'power2.in' },
          0.7);

    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="section-pinned z-40">
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/city_river_aerial_01.jpg"
          alt="Vista aérea da cidade com rio"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-yovel-dark/65" />
        <div className="absolute inset-0 vignette-overlay" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pt-16">
        <span
          ref={labelRef}
          className="label-wide text-yovel-accent mb-4"
        >
          PASSO 1 — O GATEWAY
        </span>

        <h2
          ref={headlineRef}
          className="heading-display text-yovel-text-primary text-center px-4 mb-6 md:mb-8"
          style={{ fontSize: 'clamp(22px, 6vw, 56px)' }}
        >
          OTIMIZAMOS SEU CÂMBIO PARA ELIMINAR TAXAS.
        </h2>

        <div
          ref={cardRef}
          className="glass-card p-4 md:p-6 w-full max-w-md perspective-1000"
        >
          <h3 className="font-display font-bold text-yovel-text-primary text-base md:text-lg mb-3 flex items-center gap-2">
            <TrendingDown className="w-4 h-4 md:w-5 md:h-5 text-yovel-accent" />
            O que acontece na prática
          </h3>
          <ul className="space-y-2 md:space-y-3 mb-4">
            <li className="flex items-start gap-2 text-xs md:text-sm text-yovel-text-secondary">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yovel-accent mt-0.5 flex-shrink-0" />
              <span>Conversão sem IOF e sem spread abusivo.</span>
            </li>
            <li className="flex items-start gap-2 text-xs md:text-sm text-yovel-text-secondary">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yovel-accent mt-0.5 flex-shrink-0" />
              <span>Recuperamos em média <span className="text-yovel-accent font-semibold">15%</span> do orçamento.</span>
            </li>
            <li className="flex items-start gap-2 text-xs md:text-sm text-yovel-text-secondary">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yovel-accent mt-0.5 flex-shrink-0" />
              <span>Este capital volta para o seu bolso.</span>
            </li>
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pill-button-outline text-xs w-full py-3 inline-block text-center min-h-[44px]" aria-label="Ver simulação pelo WhatsApp">
            Ver simulação
          </a>
        </div>
      </div>
    </section>
  );
}

// Section 5: Step 2 - Destination - Mobile Optimized
function Step2Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: isMobile ? '+=100%' : '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(labelRef.current,
        { y: '-10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0)
        .fromTo(headlineRef.current,
          { x: isMobile ? '30vw' : '55vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'power2.out' },
          0)
        .fromTo(cardRef.current,
          { x: isMobile ? '-30vw' : '-55vw', opacity: 0, rotateY: isMobile ? -5 : -10 },
          { x: 0, opacity: 1, rotateY: 0, ease: 'power2.out' },
          0.08)
        .fromTo(bgRef.current,
          { scale: 1.06, opacity: 0.8 },
          { scale: 1, opacity: 1, ease: 'power2.out' },
          0);

      // EXIT (70% - 100%)
      scrollTl.fromTo(labelRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.7)
        .fromTo(headlineRef.current,
          { x: 0, opacity: 1 },
          { x: isMobile ? '8vw' : '12vw', opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(cardRef.current,
          { x: 0, opacity: 1 },
          { x: isMobile ? '-8vw' : '-12vw', opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(bgRef.current,
          { scale: 1, opacity: 1 },
          { scale: 1.06, opacity: 0.8, ease: 'power2.in' },
          0.7);

    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} id="beneficios" className="section-pinned z-50">
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/city_river_aerial_02.jpg"
          alt="Vista aérea da cidade com rio ao anoitecer"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-yovel-dark/65" />
        <div className="absolute inset-0 vignette-overlay" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pt-16">
        <span
          ref={labelRef}
          className="label-wide text-yovel-accent mb-4"
        >
          PASSO 2 — O DESTINO
        </span>

        <h2
          ref={headlineRef}
          className="heading-display text-yovel-text-primary text-center px-4 mb-6 md:mb-8"
          style={{ fontSize: 'clamp(22px, 6vw, 56px)' }}
        >
          ENTREGAMOS ESTRATÉGIAS PARA UPGRADE DE VIAGEM.
        </h2>

        <div
          ref={cardRef}
          className="glass-card p-4 md:p-6 w-full max-w-md perspective-1000"
        >
          <h3 className="font-display font-bold text-yovel-text-primary text-base md:text-lg mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-yovel-accent" />
            O que você desbloqueia
          </h3>
          <ul className="space-y-2 md:space-y-3 mb-4">
            <li className="flex items-start gap-2 text-xs md:text-sm text-yovel-text-secondary">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yovel-accent mt-0.5 flex-shrink-0" />
              <span>Acesso a salas VIP por uma fração do preço.</span>
            </li>
            <li className="flex items-start gap-2 text-xs md:text-sm text-yovel-text-secondary">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yovel-accent mt-0.5 flex-shrink-0" />
              <span>Passagens com melhor custo-benefício.</span>
            </li>
            <li className="flex items-start gap-2 text-xs md:text-sm text-yovel-text-secondary">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yovel-accent mt-0.5 flex-shrink-0" />
              <span>Hacks e rotas exclusivos.</span>
            </li>
          </ul>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pill-button-outline text-xs w-full py-3 inline-block text-center min-h-[44px]" aria-label="Explorar benefícios pelo WhatsApp">
            Explorar benefícios
          </a>
        </div>
      </div>
    </section>
  );
}

// Section 6: Partnership - Mobile Optimized
function PartnershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: isMobile ? '+=100%' : '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(headlineRef.current,
        { y: isMobile ? '-20vh' : '-30vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0)
        .fromTo(cardRef.current,
          { y: isMobile ? '25vh' : '35vh', opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0.1)
        .fromTo(bgRef.current,
          { scale: 1.06 },
          { scale: 1, ease: 'power2.out' },
          0);

      // EXIT (70% - 100%)
      scrollTl.fromTo(headlineRef.current,
        { y: 0, opacity: 1 },
        { y: isMobile ? '-8vh' : '-12vh', opacity: 0, ease: 'power2.in' },
        0.7)
        .fromTo(cardRef.current,
          { y: 0, opacity: 1 },
          { y: isMobile ? '10vh' : '14vh', opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(bgRef.current,
          { scale: 1, opacity: 1 },
          { scale: 1.06, opacity: 0.8, ease: 'power2.in' },
          0.7);

    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="section-pinned z-[60]">
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/city_aerial_02.jpg"
          alt="Cidade metropolitana à noite"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-yovel-dark/65" />
        <div className="absolute inset-0 vignette-overlay" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pt-16">
        <h2
          ref={headlineRef}
          className="heading-display text-yovel-text-primary text-center px-4 mb-6 md:mb-8"
          style={{ fontSize: 'clamp(22px, 5.5vw, 56px)' }}
        >
          TRANSFORMANDO ECONOMIA EM EXPERIÊNCIA.
        </h2>

        <div
          ref={cardRef}
          className="glass-card p-4 md:p-6 w-full max-w-lg"
        >
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-yovel-text-primary text-base md:text-lg mb-2">
                Anunciamos nossa parceria com a <span className="text-yovel-accent font-semibold">Confins</span>.
              </p>
              <p className="text-yovel-text-secondary text-xs md:text-sm">
                Clientes Yovel acessam passagens com tarifas e condições especiais.
              </p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pill-button-primary text-sm py-3 inline-block text-center min-h-[48px]" aria-label="Conhecer a Confins pelo WhatsApp">
              Conhecer a Confins
            </a>
          </div>
          <div className="mt-4 pt-4 border-t border-yovel-accent/20">
            <p className="text-yovel-text-secondary text-xs text-center">
              Nós cuidamos da engenharia financeira; nossos parceiros cuidam do seu roteiro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 7: Testimonial - Mobile Optimized
function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: isMobile ? '+=100%' : '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(headlineRef.current,
        { y: isMobile ? '-15vh' : '-25vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0)
        .fromTo(cardRef.current,
          { y: isMobile ? '30vh' : '45vh', opacity: 0, scale: 0.94 },
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          0.08)
        .fromTo(bgRef.current,
          { scale: 1.05, opacity: 0.8 },
          { scale: 1, opacity: 1, ease: 'power2.out' },
          0);

      // EXIT (70% - 100%)
      scrollTl.fromTo(headlineRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.7)
        .fromTo(cardRef.current,
          { y: 0, opacity: 1 },
          { y: isMobile ? '10vh' : '16vh', opacity: 0, ease: 'power2.in' },
          0.7)
        .fromTo(bgRef.current,
          { scale: 1, opacity: 1 },
          { scale: 1.05, opacity: 0.8, ease: 'power2.in' },
          0.7);

    }, section);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section ref={sectionRef} id="depoimentos" className="section-pinned z-[70]">
      <div ref={bgRef} className="absolute inset-0">
        <img
          src="/city_aerial_03.jpg"
          alt="Panorama urbano noturno"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-yovel-dark/65" />
        <div className="absolute inset-0 vignette-overlay" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 pt-16">
        <h2
          ref={headlineRef}
          className="heading-display text-yovel-text-primary text-center px-4 mb-6 md:mb-8"
          style={{ fontSize: 'clamp(20px, 5.5vw, 56px)' }}
        >
          A CONFIANÇA DE QUEM VIVE SEM FRONTEIRAS.
        </h2>

        <div
          ref={cardRef}
          className="glass-card p-5 md:p-8 w-full max-w-2xl"
        >
          <div className="text-4xl md:text-6xl text-yovel-accent/30 mb-2">"</div>
          <blockquote className="text-yovel-text-primary text-sm md:text-lg leading-relaxed mb-4 -mt-4 md:-mt-8">
            Com a consultoria da Yovel, minha conversão de Euros ficou <span className="text-yovel-accent font-semibold">1,4% mais barata</span> do que em qualquer outra plataforma. O acesso à sala VIP, que me custaria R$ 320, com a estratégia deles saiu por apenas <span className="text-yovel-accent font-semibold">R$ 178</span> — uma economia de <span className="text-yovel-accent font-semibold">44%</span>.
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-yovel-accent/20 flex items-center justify-center">
              <span className="text-yovel-accent font-bold text-sm md:text-lg">PB</span>
            </div>
            <div>
              <p className="text-yovel-text-primary font-semibold text-sm md:text-base">Patricia Brambila</p>
              <p className="text-yovel-text-secondary text-xs md:text-sm">Cidadã Global</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 8: Pricing + Founder - Mobile Optimized
function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.querySelectorAll('.reveal-item') || [],
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 0.5,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="preco" className="relative bg-yovel-dark-secondary py-16 md:py-20 z-[80]">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/city_aerial_01.jpg"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <h2 className="reveal-item heading-display text-yovel-text-primary mb-6 md:mb-8" style={{ fontSize: 'clamp(24px, 5vw, 48px)' }}>
              UM INVESTIMENTO, NÃO UM CUSTO.
            </h2>

            <div className="reveal-item glass-card p-4 md:p-6 mb-4 md:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-2">
                <span className="text-yovel-text-secondary text-xs md:text-sm">Taxa de Engenharia Estratégica:</span>
                <span className="text-yovel-accent font-display font-bold text-xl md:text-2xl">R$ 250</span>
              </div>
              <p className="text-yovel-text-secondary text-xs md:text-sm">
                Diagnóstico, plano de otimização e acesso ao Gateway.
              </p>
            </div>

            <div className="reveal-item glass-card p-4 md:p-6 mb-6 md:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mb-2">
                <span className="text-yovel-text-secondary text-xs md:text-sm">Participação no Upgrade:</span>
                <span className="text-yovel-accent font-display font-bold text-lg md:text-2xl">40% do Valor Gerado</span>
              </div>
              <p className="text-yovel-text-secondary text-xs md:text-sm">
                Só vencemos quando você vence — economia direta + benefícios destravados.
              </p>
            </div>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="reveal-item pill-button-primary text-sm md:text-base glow-accent w-full sm:w-auto py-3 inline-flex items-center justify-center gap-2 min-h-[48px]" aria-label="Agendar diagnóstico pelo WhatsApp">
              <MessageCircle className="w-4 h-4" />
              Agendar Meu Diagnóstico
            </a>
          </div>

          <div className="reveal-item glass-card p-5 md:p-8 perspective-1000">
            <div className="text-4xl md:text-6xl text-yovel-accent/30 mb-2">"</div>
            <blockquote className="text-yovel-text-primary text-sm md:text-lg leading-relaxed mb-4 -mt-4 md:-mt-8">
              Meu único objetivo é usar meu conhecimento para destravar um nível de liberdade financeira e de vida que meus clientes não sabiam ser possível. A Yovel é o método que criei para fazer isso acontecer.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-yovel-accent/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-yovel-accent" />
              </div>
              <div>
                <p className="text-yovel-text-primary font-semibold text-sm md:text-base">Matheus Melo</p>
                <p className="text-yovel-text-secondary text-xs md:text-sm">Fundador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 9: Contact + Footer - Mobile Optimized
function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-yovel-dark-secondary py-16 md:py-20 z-[90]">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/hero_night_sky.jpg"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-2xl mx-auto px-4 md:px-6 text-center"
      >
        <h2 className="heading-display text-yovel-text-primary mb-4" style={{ fontSize: 'clamp(28px, 6vw, 56px)' }}>
          PRONTO PARA GIRAR A CHAVE?
        </h2>
        <p className="text-yovel-text-secondary text-sm md:text-lg mb-6 md:mb-8">
          A vida global que você quer — mais inteligente, mais luxuosa e com menos atrito — está a duas portas de distância.
        </p>

        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-yovel-accent/20 blur-3xl rounded-full" />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="relative pill-button-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 inline-flex items-center gap-2 md:gap-3 glow-accent min-h-[52px]" aria-label="Agendar diagnóstico pelo WhatsApp">
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            Agendar Meu Diagnóstico
          </a>
        </div>

        <p className="text-yovel-text-secondary text-xs md:text-sm mb-12 md:mb-16">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-yovel-accent transition-colors underline underline-offset-4">
            Ou fale pelo WhatsApp
          </a>
        </p>

        <footer className="pt-6 md:pt-8 border-t border-yovel-accent/10">
          <p className="text-yovel-text-secondary text-xs md:text-sm mb-3 md:mb-4">
            © Yovel — Concierge Financeiro Global
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <a href="#" className="text-yovel-text-secondary text-xs hover:text-yovel-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-yovel-text-secondary text-xs hover:text-yovel-accent transition-colors">
              Termos
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

// Main App
function App() {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Global snap for pinned sections
    const setupSnap = () => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;

            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: isMobile ? 0.25 : 0.35 },
          delay: 0,
          ease: 'power2.out',
        }
      });
    };

    // Delay to ensure all ScrollTriggers are created
    const timer = setTimeout(setupSnap, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [isMobile]);

  return (
    <div className="relative">
      <Navigation />
      <div className="grain-overlay" />

      <main className="relative">
        <HeroSection />
        <ProblemSection />
        <MethodSection />
        <Step1Section />
        <Step2Section />
        <PartnershipSection />
        <TestimonialSection />
        <PricingSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
