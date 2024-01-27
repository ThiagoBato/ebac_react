import { Calculadora } from './components/calculadora/';
import { Header } from './components/header/';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-sm mx-auto">
        <Header />
        <Calculadora />
        {/* <h1 className="text-5xl my-5 text-center">Calculadora React</h1>
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
        </div> */}
      </div>
    </div>
  );
}

export default App;
