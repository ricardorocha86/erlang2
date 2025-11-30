// Helper to calculate ln(n!) to avoid overflow with large n
const logFactorial = (n: number): number => {
  if (n < 0) return 0;
  if (n <= 1) return 0;
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result += Math.log(i);
  }
  return result;
};

// Probability Density Function (PDF) for Erlang using Log-Space
// f(x; k, λ) = (λ^k * x^(k-1) * e^(-λx)) / (k-1)!
// ln(f) = k*ln(λ) + (k-1)*ln(x) - λx - ln((k-1)!)
export const erlangPDF = (x: number, k: number, lambda: number): number => {
  if (x < 0) return 0;
  if (x === 0) {
    // Special handling for x=0
    // If k=1, f(0) = λ * 1 * 1 / 1 = λ
    // If k>1, f(0) = 0 because x^(k-1) is 0
    return k === 1 ? lambda : 0;
  }

  const logNumerator = k * Math.log(lambda) + (k - 1) * Math.log(x) - (lambda * x);
  const logDenominator = logFactorial(k - 1);
  
  return Math.exp(logNumerator - logDenominator);
};

// Normal PDF for comparison
// f(x) = (1 / (σ * sqrt(2π))) * e^(-0.5 * ((x - μ) / σ)^2)
export const normalPDF = (x: number, mean: number, stdDev: number): number => {
    if (stdDev === 0) return 0;
    const exponent = -0.5 * Math.pow((x - mean) / stdDev, 2);
    const coefficient = 1 / (stdDev * Math.sqrt(2 * Math.PI));
    return coefficient * Math.exp(exponent);
};

// Mean E[X] = k / λ
export const calculateMean = (k: number, lambda: number): number => {
  if (lambda === 0) return 0;
  return k / lambda;
};

// Variance Var(X) = k / λ²
export const calculateVariance = (k: number, lambda: number): number => {
  if (lambda === 0) return 0;
  return k / Math.pow(lambda, 2);
};

// Generate data points for charting
export const generateErlangData = (k: number, lambda: number, maxRange: number = 20, points: number = 200) => {
  const data = [];
  const step = maxRange / points;
  
  const mean = calculateMean(k, lambda);
  const variance = calculateVariance(k, lambda);
  const stdDev = Math.sqrt(variance);

  for (let i = 0; i <= points; i++) {
    const x = i * step;
    const yErlang = erlangPDF(x, k, lambda);
    const yNormal = normalPDF(x, mean, stdDev);
    
    data.push({ 
        x: parseFloat(x.toFixed(2)), 
        y: yErlang,
        yNormal: yNormal 
    });
  }
  return data;
};