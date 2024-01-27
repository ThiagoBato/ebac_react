import { useState } from 'react';

export const Calculadora = () => {
  const [inputValue, setInputValue] = useState('');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [resultShown, setResultShown] = useState(false);
  const [previousResult, setPreviousResult] = useState(null);

  const handleNumberClick = (num) => {
    if (num === ',' && inputValue.includes(',')) {
      return;
    }

    if (resultShown) {
      setInputValue(num);
      setResultShown(false);
    } else {
      setInputValue(inputValue + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (firstValue !== null && operator && inputValue !== '') {
      handleCalculate();
      setFirstValue(parseFloat(inputValue));
      if (previousResult !== null) {
        setInputValue(previousResult.toString());
      }
    } else {
      setFirstValue(parseFloat(inputValue));
    }

    setOperator(op);
    setResultShown(true);
  };

  const handleCalculate = () => {
    const secondValue = parseFloat(inputValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case '*':
        result = firstValue * secondValue;
        break;
      case '/':
        result = firstValue / secondValue;
        break;
      default:
        result = secondValue;
    }

    setPreviousResult(result);
    setOperator(null);
    setInputValue(result.toString());
  };

  const handleClear = () => {
    setInputValue('');
    setFirstValue(null);
    setOperator(null);
    setResultShown(false);
    setPreviousResult(null);
  };

  const handleDelete = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    if (/[0-9,]/.test(key)) {
      if (key === ',' && inputValue.includes(',')) {
        e.preventDefault();
      } else {
        handleNumberClick(key);
      }
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      handleOperatorClick(key);
    } else if (key === 'Enter' || key === '=') {
      handleCalculate();
      e.preventDefault();
    } else if (key === 'Escape') {
      handleClear();
    } else if (key === 'Backspace') {
      handleDelete();
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-1">
        <input className="col-span-3 text-white rounded-lg" type="text" value={inputValue} readOnly onKeyDown={handleKeyDown} />
        <button onClick={handleClear} className="py-3 px-6 bg-slate-500">
          AC
        </button>
        <button onClick={() => handleNumberClick('7')} className="py-3 px-6 bg-slate-500">
          7
        </button>
        <button onClick={() => handleNumberClick('8')} className="py-3 px-6 bg-slate-500">
          8
        </button>
        <button onClick={() => handleNumberClick('9')} className="py-3 px-6 bg-slate-500">
          9
        </button>
        <button onClick={() => handleOperatorClick('/')} className="py-3 px-6 bg-slate-500">
          /
        </button>
        <button onClick={() => handleNumberClick('4')} className="py-3 px-6 bg-slate-500">
          4
        </button>
        <button onClick={() => handleNumberClick('5')} className="py-3 px-6 bg-slate-500">
          5
        </button>
        <button onClick={() => handleNumberClick('6')} className="py-3 px-6 bg-slate-500">
          6
        </button>
        <button onClick={() => handleOperatorClick('*')} className="py-3 px-6 bg-slate-500">
          *
        </button>
        <button onClick={() => handleNumberClick('1')} className="py-3 px-6 bg-slate-500">
          1
        </button>
        <button onClick={() => handleNumberClick('2')} className="py-3 px-6 bg-slate-500">
          2
        </button>
        <button onClick={() => handleNumberClick('3')} className="py-3 px-6 bg-slate-500">
          3
        </button>
        <button onClick={() => handleOperatorClick('-')} className="py-3 px-6 bg-slate-500">
          -
        </button>
        <button onClick={() => handleNumberClick(',')} className="py-3 px-6 bg-slate-500">
          ,
        </button>
        <button onClick={() => handleNumberClick('0')} className="py-3 px-6 bg-slate-500">
          0
        </button>
        <button onClick={handleDelete} className="py-3 px-6 bg-slate-500">
          DEL
        </button>
        <button onClick={() => handleOperatorClick('+')} className="py-3 px-6 bg-slate-500">
          +
        </button>
        <button onClick={handleCalculate} className="py-3 px-6 bg-slate-500 col-span-4">
          =
        </button>
      </div>
    </>
  );
};
