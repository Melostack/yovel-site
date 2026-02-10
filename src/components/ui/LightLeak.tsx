import { motion } from "framer-motion";

export const LightLeak = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Soft warm glow from top right (Sunlight) */}
      <motion.div 
        animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
        }}
        transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
        }}
        className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full bg-radial-gradient from-meraas-gold/20 via-transparent to-transparent blur-[120px] mix-blend-soft-light"
      />

      {/* Cool shadow/reflection from bottom left */}
      <motion.div 
        animate={{ 
            opacity: [0.2, 0.4, 0.2],
            transform: ["translateX(0px)", "translateX(20px)", "translateX(0px)"]
        }}
        transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
        }}
        className="absolute -bottom-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-radial-gradient from-white/10 via-transparent to-transparent blur-[100px] mix-blend-overlay"
      />
    </div>
  );
};
