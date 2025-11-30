import React from 'react';
import { SlideProps } from '../types';

const TitleSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-erlang-primary text-white p-8 rounded-xl shadow-2xl relative overflow-hidden">
      
      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-erlang-accent opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>

      <div className="z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 tracking-tight">
          Distribuição <br />
          <span className="text-erlang-accent">Erlang</span>
        </h1>
        <div className="w-24 h-2 bg-erlang-accent mx-auto mb-8 rounded-full"></div>
        <p className="text-lg md:text-2xl font-light tracking-widest uppercase opacity-90">
          Estatística Aplicada, Engenharia & Filas
        </p>
        
        <button 
          className="mt-12 px-8 py-3 bg-white text-erlang-primary font-bold rounded-full hover:bg-erlang-accent hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          onClick={() => {
            const nextBtn = document.getElementById('next-slide-btn');
            if(nextBtn) nextBtn.click();
          }}
        >
          Iniciar Apresentação
        </button>
      </div>
    </div>
  );
};

export default TitleSlide;