import React from 'react';

export const TextureLayer = ({ opacity = 0.4 }) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0 mix-blend-multiply"
      style={{ opacity }}
    >
      {/* Simulação de Mármore Travertino via SVG Filter */}
      <svg className="w-full h-full opacity-60">
        <filter id="marble">
          <feTurbulence type="fractalNoise" baseFrequency="0.004" numOctaves="5" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="#e5e2d9" surfaceScale="2">
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
        </filter>
        <rect width="100%" height="100%" filter="url(#marble)" />
      </svg>
      
      {/* Grão de Papel Fino sobreposto */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
