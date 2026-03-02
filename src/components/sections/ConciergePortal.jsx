import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { getChromeAI } from '../../lib/ai/chrome-ai';

export const ConciergePortal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAI, setHasAI] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá. Sou o Concierge Digital da Yovel. Como posso orquestrar sua liberdade financeira hoje?' }
  ]);

  useEffect(() => {
    getChromeAI().then(ai => setHasAI(!!ai));
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    if (hasAI) {
      try {
        const ai = await window.ai.prompt.create();
        const response = await ai.prompt(`Você é o Concierge da Yovel, um assistente financeiro de elite. Responda de forma curta e sofisticada: ${input}`);
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      } catch (e) {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Estou processando sua solicitação com nossos analistas. Um momento.' }]);
      }
    } else {
      setMessages(prev => [...prev, { role: 'assistant', content: 'O serviço de Concierge Inteligente requer o Google Chrome 138+. Por favor, entre em contato via Telegram para atendimento personalizado.' }]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#F5F5F7] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 font-dm-sans font-bold text-xs uppercase tracking-widest"
      >
        <MessageCircle size={20} />
        Concierge
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-50 w-full max-w-md bg-[#0A0A0B] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px] backdrop-blur-xl"
          >
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <div>
                <h3 className="font-spectral text-xl text-white">Yovel Concierge</h3>
                <p className="text-[10px] text-meraas-gold uppercase tracking-widest font-bold flex items-center gap-1">
                  <Sparkles size={10} /> Powered by Local Intelligence
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-white/10 text-white' : 'bg-white/[0.03] text-zinc-300 border border-white/5'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white/[0.02] border-t border-white/5 flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Como podemos ajudar?"
                className="flex-1 bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-zinc-600"
              />
              <button onClick={handleSend} className="text-meraas-gold hover:text-white transition-colors">
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
