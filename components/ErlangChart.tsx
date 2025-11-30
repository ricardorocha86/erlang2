import React, { useMemo, useState } from 'react';
import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { generateErlangData, calculateMean, calculateVariance } from '../utils/math';
import { ErlangParams } from '../types';

interface ErlangChartProps {
  params: ErlangParams;
  setParams: React.Dispatch<React.SetStateAction<ErlangParams>>;
}

const ErlangChart: React.FC<ErlangChartProps> = ({ params, setParams }) => {
  const { k, lambda } = params;
  const [showNormal, setShowNormal] = useState(false);

  // Generate data based on current parameters
  // Dynamic range based on Mean to keep the curve visible
  const mean = calculateMean(k, lambda);
  const variance = calculateVariance(k, lambda);
  // Adjust X-axis range: if k is high, the curve moves right. Ensure we cover enough range.
  const maxX = Math.max(10, mean + (4 * Math.sqrt(variance))); 
  
  const data = useMemo(() => generateErlangData(k, lambda, maxX), [k, lambda, maxX]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      
      {/* Chart Section */}
      <div className="flex-1 h-[350px] md:h-[450px]">
        <h3 className="text-lg font-bold mb-2 text-center text-gray-500 font-sans">
          Função Densidade de Probabilidade (FDP)
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorY" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00c4b4" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#00c4b4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis 
              dataKey="x" 
              label={{ value: 'Tempo (x)', position: 'insideBottomRight', offset: -5 }} 
              type="number"
              domain={[0, 'auto']}
              tickCount={10}
            />
            <YAxis label={{ value: 'Probabilidade', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              formatter={(value: number, name: string) => {
                 if (name === 'y') return [value.toFixed(4), 'Erlang'];
                 if (name === 'yNormal') return [value.toFixed(4), 'Normal (ref)'];
                 return [value, name];
              }}
              labelFormatter={(label: number) => `x: ${label}`}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            
            {/* Normal Distribution Reference (Conditional) */}
            {showNormal && (
                <Line 
                    type="monotone" 
                    dataKey="yNormal" 
                    stroke="#9ca3af" 
                    strokeWidth={2} 
                    strokeDasharray="5 5" 
                    dot={false}
                    name="Normal"
                />
            )}

            <Area 
              type="monotone" 
              dataKey="y" 
              stroke="#005b8e" 
              fillOpacity={1} 
              fill="url(#colorY)" 
              strokeWidth={3}
              animationDuration={500}
              name="Erlang"
            />
            
            {/* Mark the Mean */}
            <ReferenceLine x={mean} stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'top', value: 'Média', fill: '#ef4444', fontSize: 12 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Controls Section */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-serif font-bold text-erlang-primary border-b pb-2">Parâmetros</h3>
        
        {/* Slider K */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="param-k" className="font-semibold text-gray-700">Forma (k)</label>
            <span className="bg-erlang-primary text-white px-3 py-1 rounded-full font-mono">{k}</span>
          </div>
          <input
            id="param-k"
            type="range"
            min="1"
            max="100"
            step="1"
            value={k}
            onChange={(e) => setParams(p => ({ ...p, k: parseInt(e.target.value) }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-erlang-accent"
          />
          <p className="text-xs text-gray-500">Número de eventos (Máx: 100)</p>
        </div>

        {/* Slider Lambda */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="param-lambda" className="font-semibold text-gray-700">Taxa (λ)</label>
            <span className="bg-erlang-primary text-white px-3 py-1 rounded-full font-mono">{lambda.toFixed(1)}</span>
          </div>
          <input
            id="param-lambda"
            type="range"
            min="0.1"
            max="5.0"
            step="0.1"
            value={lambda}
            onChange={(e) => setParams(p => ({ ...p, lambda: parseFloat(e.target.value) }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-erlang-accent"
          />
          <p className="text-xs text-gray-500">Eventos por unidade de tempo</p>
        </div>

        {/* Normal Curve Toggle */}
        <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 mt-2">
            <input 
                type="checkbox" 
                id="showNormal" 
                checked={showNormal}
                onChange={(e) => setShowNormal(e.target.checked)}
                className="w-5 h-5 text-erlang-accent rounded focus:ring-erlang-accent"
            />
            <label htmlFor="showNormal" className="text-sm font-semibold text-gray-700 cursor-pointer select-none">
                Comparar com Normal (TCL)
            </label>
        </div>

        {/* Calculated Results */}
        <div className="mt-4 pt-4 border-t border-gray-300">
          <h4 className="font-bold text-gray-600 mb-3">Resultados Calculados</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded shadow-sm border-l-4 border-blue-500">
              <span className="block text-xs text-gray-400 uppercase">Esperança E[X]</span>
              <span className="text-xl font-bold text-gray-800">{mean.toFixed(2)}</span>
            </div>
            <div className="bg-white p-3 rounded shadow-sm border-l-4 border-teal-500">
              <span className="block text-xs text-gray-400 uppercase">Variância Var(X)</span>
              <span className="text-xl font-bold text-gray-800">{variance.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ErlangChart;