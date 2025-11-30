import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import TitleSlide from './slides/TitleSlide';
import DefinitionSlide from './slides/DefinitionSlide';
import FormulaSlide from './slides/FormulaSlide';
import MomentsSlide from './slides/MomentsSlide';
import UsageSlide from './slides/UsageSlide';
import ConvergenceSlide from './slides/ConvergenceSlide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: TitleSlide, label: "Início" },
    { component: DefinitionSlide, label: "Definição" },
    { component: FormulaSlide, label: "Fórmulas & Gráfico" },
    { component: MomentsSlide, label: "Momentos" },
    { component: ConvergenceSlide, label: "Convergência" },
    { component: UsageSlide, label: "Aplicações" },
  ];

  const CurrentComponent = slides[currentSlide].component;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(curr => curr + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(curr => curr - 1);
  };

  return (
    <div className="flex h-screen w-full bg-erlang-bg font-sans overflow-hidden">
      
      {/* Sidebar Navigation (Desktop) */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-full">
        <div className="p-6 border-b border-gray-100">
          <h1 className="font-serif font-bold text-erlang-primary text-xl">Distribuição Erlang</h1>
          <p className="text-xs text-gray-500 mt-1">Explorador Interativo</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
                currentSlide === index 
                  ? 'bg-erlang-primary/10 text-erlang-primary border-r-4 border-erlang-primary' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <span className="opacity-50 mr-2">{index + 1}.</span> {slide.label}
            </button>
          ))}
        </nav>
        <div className="p-6 text-xs text-gray-400 border-t border-gray-100">
           © 2024 Estatística Aplicada
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative">
        
        {/* Mobile Header */}
        <div className="md:hidden h-14 bg-white border-b flex items-center justify-between px-4">
          <span className="font-serif font-bold text-erlang-primary">Erlang Explorer</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
             {currentSlide + 1} / {slides.length}
          </span>
        </div>

        {/* Slide Viewport */}
        <main className="flex-1 overflow-hidden relative bg-erlang-bg">
          <div className="h-full w-full">
            <CurrentComponent isActive={true} />
          </div>
        </main>

        {/* Navigation Controls (Bottom Bar) */}
        <div className="h-16 bg-white border-t border-gray-200 flex items-center justify-between px-6 md:px-12 z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              currentSlide === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:bg-gray-100 hover:text-erlang-primary'
            }`}
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          {/* Progress Indicators */}
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <div 
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-erlang-primary' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button 
            id="next-slide-btn"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              currentSlide === slides.length - 1 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'bg-erlang-primary text-white hover:bg-erlang-primary/90 shadow-sm'
            }`}
          >
            <span className="hidden sm:inline">Próximo</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;