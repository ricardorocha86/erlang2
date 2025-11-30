import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ children, title, subtitle, className = "" }) => {
  return (
    <div className={`w-full h-full flex flex-col p-6 md:p-12 overflow-y-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8 border-b-2 border-erlang-accent pb-4 animate-fade-in-down">
          {title && <h2 className="text-3xl md:text-5xl font-serif font-bold text-erlang-primary mb-2">{title}</h2>}
          {subtitle && <p className="text-erlang-primary/70 text-lg uppercase tracking-widest font-sans font-semibold">{subtitle}</p>}
        </div>
      )}
      <div className="flex-1 animate-fade-in-up">
        {children}
      </div>
    </div>
  );
};

export default SlideLayout;