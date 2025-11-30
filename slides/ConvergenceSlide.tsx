import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { SlideProps } from '../types';
import { ArrowRight, GitMerge } from 'lucide-react';

const ConvergenceSlide: React.FC<SlideProps> = () => {
  return (
    <SlideLayout title="Convergência" subtitle="Teorema Central do Limite">
      <div className="flex flex-col h-full justify-center max-w-5xl mx-auto space-y-12">
        
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-8 border-erlang-primary animate-fade-in-up">
            <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-full hidden md:block">
                    <GitMerge className="w-10 h-10 text-erlang-primary" />
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-erlang-primary mb-4">Comportamento Assintótico</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Pelo <strong>Teorema Central do Limite</strong>, como a distribuição Erlang é a soma de <span className="font-serif italic font-bold">k</span> variáveis aleatórias independentes e identicamente distribuídas (exponenciais), ela tende à distribuição <strong>Normal</strong> conforme <span className="font-serif italic font-bold">k</span> aumenta.
                    </p>
                    <p className="text-gray-600 bg-gray-50 p-4 rounded italic border border-gray-100">
                        "Para valores grandes de k (geralmente k > 30), a distribuição Erlang(k, λ) torna-se indistinguível de uma Gaussiana."
                    </p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            
            {/* Erlang Box */}
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200 text-center">
                <h4 className="font-serif font-bold text-xl text-teal-800 mb-2">Erlang</h4>
                <div className="text-lg font-serif">
                    X ~ Erlang(<span className="italic">k, λ</span>)
                </div>
                <div className="text-sm text-gray-500 mt-2">k grande</div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center text-gray-400">
                <ArrowRight className="w-12 h-12" />
            </div>

            {/* Normal Box */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
                <h4 className="font-serif font-bold text-xl text-gray-800 mb-2">Normal</h4>
                <div className="text-lg font-serif">
                    Y ~ N(<span className="italic">μ, σ²</span>)
                </div>
                <div className="text-sm text-gray-500 mt-2">Aproximação</div>
            </div>

        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-erlang-accent animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h4 className="font-bold text-gray-600 mb-4 text-center uppercase text-sm tracking-widest">Parâmetros da Aproximação</h4>
            <div className="flex justify-around items-center font-serif">
                <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2 font-sans">Média</div>
                    <div className="text-2xl text-erlang-primary flex items-center justify-center">
                        <span className="italic mr-2">μ</span> = 
                        <div className="math-fraction">
                            <span className="math-numerator">k</span>
                            <span className="math-denominator">λ</span>
                        </div>
                    </div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2 font-sans">Variância</div>
                    <div className="text-2xl text-erlang-primary flex items-center justify-center">
                        <span className="italic mr-2">σ²</span> = 
                        <div className="math-fraction">
                            <span className="math-numerator">k</span>
                            <span className="math-denominator">λ²</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default ConvergenceSlide;