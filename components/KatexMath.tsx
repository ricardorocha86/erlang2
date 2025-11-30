import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    katex: any;
  }
}

interface KatexMathProps {
  latex: string;
  block?: boolean;
  className?: string;
}

const KatexMath: React.FC<KatexMathProps> = ({ latex, block = false, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderMath = () => {
      if (containerRef.current && window.katex) {
        try {
          window.katex.render(latex, containerRef.current, {
            throwOnError: false,
            displayMode: block
          });
        } catch (e) {
          console.error("KaTeX error:", e);
          containerRef.current.innerText = latex;
        }
      }
    };

    // Attempt to render immediately
    renderMath();

    // If KaTeX isn't loaded yet, wait for it
    if (!window.katex) {
        const checkInterval = setInterval(() => {
            if (window.katex) {
                renderMath();
                clearInterval(checkInterval);
            }
        }, 100);
        return () => clearInterval(checkInterval);
    }
  }, [latex, block]);

  return <div ref={containerRef} className={`${block ? 'my-2' : 'inline-block'} ${className}`} />;
};

export default KatexMath;