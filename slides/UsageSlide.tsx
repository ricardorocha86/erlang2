import React from 'react';
import SlideLayout from '../components/SlideLayout';
import { SlideProps } from '../types';
import { CheckCircle, Network, Server, Phone, Settings } from 'lucide-react';

const UsageSlide: React.FC<SlideProps> = () => {
  return (
    <SlideLayout title="Quando Utilizar?" subtitle="Aplicações Práticas">
      <div className="flex flex-col lg:flex-row gap-8 h-full">
        
        {/* List of Uses */}
        <div className="lg:w-3/5 space-y-6">
          <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:bg-teal-50 transition-colors">
            <div className="mt-1"><Server className="w-6 h-6 text-erlang-accent" /></div>
            <div>
              <h4 className="font-bold text-erlang-primary text-lg">Teoria das Filas</h4>
              <p className="text-gray-600">Modelagem do tempo para atender <em className="font-serif">k</em> clientes em um sistema.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:bg-teal-50 transition-colors">
            <div className="mt-1"><CheckCircle className="w-6 h-6 text-erlang-accent" /></div>
            <div>
              <h4 className="font-bold text-erlang-primary text-lg">Confiabilidade</h4>
              <p className="text-gray-600">Tempo até a <em className="font-serif">k</em>-ésima falha de um sistema redundante (componentes em standby).</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:bg-teal-50 transition-colors">
            <div className="mt-1"><Phone className="w-6 h-6 text-erlang-accent" /></div>
            <div>
              <h4 className="font-bold text-erlang-primary text-lg">Telecomunicações</h4>
              <p className="text-gray-600">Modelagem do fluxo de pacotes de dados e tráfego de chamadas.</p>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:bg-teal-50 transition-colors">
            <div className="mt-1"><Settings className="w-6 h-6 text-erlang-accent" /></div>
            <div>
              <h4 className="font-bold text-erlang-primary text-lg">Processos Industriais</h4>
              <p className="text-gray-600">Tempo para concluir processos de múltiplas etapas sequenciais.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Context */}
        <div className="lg:w-2/5 flex flex-col gap-6">
            <div className="bg-erlang-primary text-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center justify-center flex-1">
                <Network className="w-16 h-16 text-erlang-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Contexto Maior</h3>
                <p className="opacity-90">Caso particular da distribuição <strong>Gama</strong>.</p>
                <div className="w-12 h-1 bg-white/30 my-4"></div>
                <p className="opacity-90">Fortemente associada ao processo de <strong>Poisson</strong>.</p>
            </div>

            {/* Credits Section (Mini) */}
            <div className="bg-gray-200 p-4 rounded-lg text-xs text-gray-500">
                <strong>Fontes das Imagens Originais:</strong>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                    <li>GeeksforGeeks (Queueing Theory)</li>
                    <li>Wikipedia (Erlang Distribution PDF Plot)</li>
                </ul>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default UsageSlide;