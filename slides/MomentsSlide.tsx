import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { SlideProps } from '../types';
import { Calculator, TrendingUp, Lightbulb } from 'lucide-react';

const MomentsSlide: React.FC<SlideProps> = () => {
  return (
    <SlideLayout title="Momentos e Interpretação" subtitle="Propriedades Estatísticas">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full content-center py-8">
        
        {/* Expectation Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-8 border-erlang-accent hover:-translate-y-2 transition-transform duration-300">
          <div className="bg-teal-100 p-4 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-erlang-accent" />
          </div>
          <h3 className="text-xl font-bold text-erlang-primary mb-2">Esperança (Média)</h3>
          <p className="text-gray-500 text-sm mb-6">Tempo médio até o k-ésimo evento</p>
          <div className="bg-gray-50 w-full py-6 rounded-lg font-serif">
             <div className="flex items-center justify-center text-3xl text-gray-800">
                <span className="mr-3 italic">E[X]</span> = 
                <div className="math-fraction">
                    <span className="math-numerator">k</span>
                    <span className="math-denominator">λ</span>
                </div>
             </div>
          </div>
        </div>

        {/* Variance Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-8 border-blue-400 hover:-translate-y-2 transition-transform duration-300 delay-100">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-erlang-primary mb-2">Variância</h3>
          <p className="text-gray-500 text-sm mb-6">Dispersão do tempo de espera</p>
          <div className="bg-gray-50 w-full py-6 rounded-lg font-serif mb-2">
             <div className="flex items-center justify-center text-3xl text-gray-800">
                <span className="mr-3 italic">Var(X)</span> = 
                <div className="math-fraction">
                    <span className="math-numerator">k</span>
                    <span className="math-denominator">λ²</span>
                </div>
             </div>
          </div>
          <div className="text-sm text-gray-400 mt-2 font-serif flex items-center justify-center gap-2">
            Desvio Padrão: <span className="italic">σ</span> = 
            <div className="math-fraction text-xs">
                <span className="math-numerator">√k</span>
                <span className="math-denominator">λ</span>
            </div>
          </div>
        </div>

        {/* Interpretation Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-t-8 border-erlang-primary hover:-translate-y-2 transition-transform duration-300 delay-200">
          <div className="bg-slate-100 p-4 rounded-full mb-4">
            <Lightbulb className="w-8 h-8 text-erlang-primary" />
          </div>
          <h3 className="text-xl font-bold text-erlang-primary mb-2">Interpretação</h3>
          <p className="text-gray-500 text-sm mb-4">Conexão com a Exponencial</p>
          <div className="text-gray-700 text-sm leading-relaxed px-2">
            A Erlang é a <strong className="text-erlang-accent">soma de k variáveis</strong> aleatórias independentes com distribuição Exponencial (todas com parâmetro <span className="font-serif italic">λ</span>).
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default MomentsSlide;