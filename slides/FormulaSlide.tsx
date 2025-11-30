import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';
import ErlangChart from '../components/ErlangChart';
import { SlideProps, ErlangParams } from '../types';

const FormulaSlide: React.FC<SlideProps> = () => {
  const [params, setParams] = useState<ErlangParams>({ k: 2, lambda: 0.5 });

  return (
    <SlideLayout title="Fórmulas e Comportamento" subtitle="Laboratório Interativo">
      <div className="space-y-8">
        
        {/* Formula Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PDF Formula */}
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-erlang-primary flex flex-col items-center justify-center min-h-[160px] overflow-x-auto">
            <h4 className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Função Densidade de Probabilidade (FDP)</h4>
            <div className="font-serif text-xl md:text-2xl text-gray-800 flex items-center flex-wrap justify-center gap-2">
              <span className="italic">f(x; k, λ)</span>
              <span>=</span>
              <div className="math-fraction">
                <span className="math-numerator">λ<sup>k</sup> x<sup>k-1</sup> e<sup>-λx</sup></span>
                <span className="math-denominator">(k - 1)!</span>
              </div>
              <span className="ml-2 text-lg text-gray-600">, x ≥ 0</span>
            </div>
          </div>

          {/* CDF Formula */}
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-erlang-accent flex flex-col items-center justify-center min-h-[160px] overflow-x-auto">
             <h4 className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Função Distribuição Acumulada (FDA)</h4>
             <div className="font-serif text-xl md:text-2xl text-gray-800 flex items-center flex-wrap justify-center gap-2">
               <span className="italic">F(x; k, λ)</span>
               <span>= 1 - e<sup>-λx</sup></span>
               <div className="flex items-center">
                 <div className="flex flex-col items-center relative mx-1">
                    <span className="text-xs absolute -top-3">k-1</span>
                    <span className="text-2xl leading-none">Σ</span>
                    <span className="text-xs absolute -bottom-3">n=0</span>
                 </div>
                 <div className="math-fraction">
                    <span className="math-numerator">(λx)<sup>n</sup></span>
                    <span className="math-denominator">n!</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center text-sm text-gray-500 italic font-serif">
          Nota: Quando <span className="font-bold">k = 1</span>, a distribuição reduz-se à distribuição Exponencial.
        </div>

        {/* Interactive Chart Component */}
        <div className="relative">
            <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded font-bold animate-pulse z-10 border border-yellow-200 shadow-sm">
                Interativo: Ajuste k até 100!
            </div>
            <ErlangChart params={params} setParams={setParams} />
        </div>

      </div>
    </SlideLayout>
  );
};

export default FormulaSlide;