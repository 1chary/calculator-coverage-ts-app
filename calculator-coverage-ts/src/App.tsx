import React, { useState } from 'react';
import { Calculator } from './math';
import './App.css';

const calc = new Calculator();

interface Operation {
  id: string;
  label: string;
  symbol: string;
  fn: (a: number, b: number) => number | string;
  color: string;
}

const OPERATIONS: Operation[] = [
  { id: 'add',      label: 'Addition',       symbol: '+', fn: (a, b) => calc.add(a, b),      color: '#4ade80' },
  { id: 'multiply', label: 'Multiplication', symbol: '×', fn: (a, b) => calc.multiply(a, b), color: '#60a5fa' },
  { id: 'divide',   label: 'Division',       symbol: '÷', fn: (a, b) => calc.divide(a, b),   color: '#f87171' },
];

interface CardProps {
  op: Operation;
}

function CalculatorCard({ op }: CardProps) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const result = a !== '' && b !== ''
    ? op.fn(parseFloat(a), parseFloat(b))
    : null;

  return (
    <div className="card" style={{ '--accent': op.color } as React.CSSProperties}>
      <div className="card-header">
        <span className="symbol">{op.symbol}</span>
        <h2>{op.label}</h2>
      </div>
      <div className="inputs">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="a"
          aria-label={`First number for ${op.label}`}
        />
        <span className="op-badge">{op.symbol}</span>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="b"
          aria-label={`Second number for ${op.label}`}
        />
      </div>
      <div className="result-row">
        <span className="result-label">Result</span>
        <span className="result-value">
          {result !== null ? String(result) : '—'}
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="badge">Istanbul Coverage Demo</div>
        <h1>Calculator</h1>
        <p className="subtitle">
          TypeScript source — deployed on Vercel with{' '}
          <code>window.__coverage__</code>
        </p>
      </header>
      <main className="grid">
        {OPERATIONS.map((op) => (
          <CalculatorCard key={op.id} op={op} />
        ))}
      </main>
    </div>
  );
}
