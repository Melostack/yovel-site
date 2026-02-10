import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PerformanceChart = () => {
  // Mock data points for the path
  // Representing a smooth upward trend with slight variance
  const points = [
    [0, 100],
    [20, 90],
    [40, 70],
    [60, 40],
    [80, 20],
    [100, 5]
  ];

  // Convert points to SVG path string (cubic bezier for smoothness)
  // Simplified for this demo: simple curve
  const pathData = "M0,100 C20,100 20,90 40,70 S60,40 100,5"; 
  // Actually, let's use a standard polyline or specific curve manually tuned for "Success"
  const chartPath = "M0,120 C30,120 40,90 70,60 S120,20 200,10";

  return (
    <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center relative p-6">
      <div className="absolute top-4 right-4 flex flex-col items-end">
        <span className="font-fragment-mono text-meraas-gold text-4xl font-bold">+15.4%</span>
        <span className="font-fragment-mono text-meraas-gray text-xs uppercase tracking-widest">Yield Anual Médio</span>
      </div>

      <svg 
        viewBox="0 0 200 130" 
        className="w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Grid lines (optional, subtle) */}
        <line x1="0" y1="120" x2="200" y2="120" stroke="currentColor" className="text-white/5" strokeWidth="0.5" />
        <line x1="0" y1="80" x2="200" y2="80" stroke="currentColor" className="text-white/5" strokeWidth="0.5" />
        <line x1="0" y1="40" x2="200" y2="40" stroke="currentColor" className="text-white/5" strokeWidth="0.5" />

        {/* The Animated Line */}
        <motion.path
          d={chartPath}
          fill="none"
          stroke="#ab6b18" // meraas-gold
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 2.5, 
            ease: [0.22, 1, 0.36, 1] // swift out, slow ease in
          }}
        />

        {/* Gradient Fill (Optional, faded below the line) */}
        <motion.path
          d={`${chartPath} L200,130 L0,130 Z`}
          fill="url(#goldGradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
        />

        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ab6b18" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ab6b18" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Axis Labels */}
      <div className="absolute bottom-2 left-6 right-6 flex justify-between font-fragment-mono text-[10px] text-meraas-gray">
        <span>Q1</span>
        <span>Q2</span>
        <span>Q3</span>
        <span>Q4</span>
      </div>
    </div>
  );
};
