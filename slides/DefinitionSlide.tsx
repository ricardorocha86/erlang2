import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { SlideProps } from '../types';
import { Users, Clock, Activity } from 'lucide-react';

const DefinitionSlide: React.FC<SlideProps> = () => {
  return (
    <SlideLayout title="Definição e Parâmetros" subtitle="Conceito Fundamental">
      <div className="flex flex-col lg:flex-row gap-8 items-start h-full">
        
        {/* Left Column: Text */}
        <div className="lg:w-1/2 space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-erlang-primary">
            <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-erlang-accent" /> Conceito
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Uma distribuição contínua que modela o <strong className="text-erlang-primary">tempo total de espera</strong> até a ocorrência de <em className="font-serif">k</em> eventos sucessivos.
            </p>
            <p className="text-gray-600 mt-4 text-sm bg-gray-50 p-3 rounded italic">
              Assume-se que os eventos ocorrem de forma <strong>independente</strong> e a uma taxa constante.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-erlang-primary flex items-center gap-2">
              <Activity className="w-6 h-6 text-erlang-accent" /> Parâmetros
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                <span className="font-serif font-bold text-xl text-erlang-accent w-16">k ∈ N*</span>
                <div>
                  <strong className="block text-gray-800">Parâmetro de Forma</strong>
                  <span className="text-gray-600 text-sm">Número de eventos aguardados (inteiro positivo).</span>
                </div>
              </li>
              <li className="flex items-start bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                <span className="font-serif font-bold text-xl text-erlang-accent w-16">λ &gt; 0</span>
                <div>
                  <strong className="block text-gray-800">Parâmetro de Taxa</strong>
                  <span className="text-gray-600 text-sm">Velocidade média de ocorrência.</span>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500 font-mono">Suporte: Variável Aleatória Contínua com x ≥ 0</p>
          </div>
        </div>

        {/* Right Column: Visual Metaphor */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center bg-blue-50 rounded-xl p-8 border border-blue-100 h-full min-h-[300px]">
          <h4 className="font-serif font-bold text-xl mb-6 text-erlang-primary">Teoria das Filas (Queueing Theory)</h4>
          
          <div className="relative w-full max-w-md">
            {/* Visual representation of queue */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col items-center gap-2">
                    <Users className="w-12 h-12 text-gray-400" />
                    <span className="text-xs font-bold text-gray-500">Chegada</span>
                </div>
                <div className="h-1 flex-1 bg-gray-300 mx-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-1/3 bg-erlang-accent animate-pulse"></div>
                </div>
                <div className="border-2 border-erlang-primary p-4 rounded bg-white shadow-lg text-center">
                    <span className="font-bold text-erlang-primary">Servidor</span>
                    <div className="text-xs text-gray-400 mt-1">Processando k etapas...</div>
                </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow mt-8 text-center text-sm text-gray-600">
               A distribuição Erlang responde: <br/>
               <strong>"Quanto tempo demora para atender k clientes?"</strong>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default DefinitionSlide;