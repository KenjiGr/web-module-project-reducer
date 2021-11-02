import React,{useReducer} from 'react';
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers';
import {addMemory, applyNumber, changeOperation, clearDisplay, clearMemory, setMemory} from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClear = () => {
    dispatch(clearDisplay())
  }

  const handleAddMem = () => {
    dispatch(addMemory())
  }

  const handleClearMem = () => {
    dispatch(clearMemory())
  }

  const handleSetMem = () => {
    dispatch(setMemory());
  }

  const handleApplyNum = e => {
    const parsed = parseInt(e.target.textContent)
    dispatch(applyNumber(parsed))
  }

  const handleOperation = e => {
    dispatch(changeOperation(e.target.outerText))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="null"><img width="40px" src="./Lambda-Logo-Red.png" alt='Lambda'/> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton  value={"M+"} onClick={handleSetMem}/>
              <CalcButton value={"MR"} onClick={handleAddMem}/>
              <CalcButton value={"MC"} onClick={handleClearMem}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(handleApplyNum)}/>
              <CalcButton value={2} onClick={(handleApplyNum)}/>
              <CalcButton value={3} onClick={(handleApplyNum)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(handleApplyNum)}/>
              <CalcButton value={5} onClick={(handleApplyNum)}/>
              <CalcButton value={6} onClick={(handleApplyNum)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(handleApplyNum)}/>
              <CalcButton value={8} onClick={(handleApplyNum)}/>
              <CalcButton value={9} onClick={(handleApplyNum)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperation}/>
              <CalcButton value={"*"} onClick={handleOperation}/>
              <CalcButton value={"-"} onClick={handleOperation}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
