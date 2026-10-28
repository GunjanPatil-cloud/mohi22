import React, { useState } from 'react';

interface ChairImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  title?: string;
}

export const ChairImage: React.FC<ChairImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  category,
  title
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#103D2E] to-[#1c5742] text-[#F5F7F4] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B5F45A_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Minimalist Folding Chair Technical Graphic */}
        <div className="relative w-20 h-20 mb-3 text-[#B5F45A] flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full drop-shadow-sm"
          >
            {/* Minimalist modern folding chair vector */}
            {/* Backrest frame */}
            <path d="M 32 15 L 68 15 L 64 52 L 36 52 Z" strokeWidth="2.5" />
            <line x1="36" y1="28" x2="64" y2="28" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="37" y1="40" x2="63" y2="40" strokeWidth="2" strokeDasharray="3 3" />
            {/* Pivot hinge */}
            <circle cx="36" cy="54" r="3" fill="#B5F45A" />
            <circle cx="64" cy="54" r="3" fill="#B5F45A" />
            {/* Seat platform */}
            <path d="M 28 54 L 72 54 L 68 59 L 32 59 Z" fill="currentColor" fillOpacity="0.25" strokeWidth="3" />
            {/* Scissor legs */}
            <line x1="36" y1="54" x2="72" y2="90" strokeWidth="3.5" />
            <line x1="64" y1="54" x2="28" y2="90" strokeWidth="3.5" />
            {/* Ground brace */}
            <line x1="32" y1="84" x2="68" y2="84" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10">
          {category && (
            <span className="text-[11px] font-semibold tracking-wider text-[#B5F45A] uppercase block mb-1">
              {category}
            </span>
          )}
          <span className="text-sm font-semibold text-white block max-w-[200px] leading-tight">
            {title || alt}
          </span>
          <span className="text-[11px] text-[#D6E5DE]/80 mt-1 block">
            Nexlivo Precision Seating
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#E9EFEA]">
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#21885B] border-t-transparent animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
