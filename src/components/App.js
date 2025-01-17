import React, { useReducer } from "react";
import reducer from "../reducers/index";
import { initialState } from "../reducers";
import {
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryTotal,
  memoryPlusTotal,
  clearMemory,
} from "../actions";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleEvent = () => {
    dispatch(addOne());
  };

  const handleAll = (num) => {
    dispatch(applyNumber(num));
  };

  const handleOperationChange = (operator) => {
    dispatch(changeOperation(operator));
  };

  const handleClearDisplay = () => {
    dispatch(clearDisplay());
  };

  const handleMemoryTotal = () => {
    dispatch(memoryTotal());
  };

  const handleMemoryPlusTotal = () => {
    dispatch(memoryPlusTotal(state.total));
  };

  const handleClearMemory = () => {
    dispatch(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleMemoryTotal()} />
              <CalcButton
                value={"MR"}
                onClick={() => handleMemoryPlusTotal(total)}
              />
              <CalcButton value={"MC"} onClick={() => handleClearMemory()} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleAll(1)} />
              <CalcButton value={2} onClick={() => handleAll(2)} />
              <CalcButton value={3} onClick={() => handleAll(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleAll(4)} />
              <CalcButton value={5} onClick={() => handleAll(5)} />
              <CalcButton value={6} onClick={() => handleAll(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleAll(7)} />
              <CalcButton value={8} onClick={() => handleAll(8)} />
              <CalcButton value={9} onClick={() => handleAll(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => handleOperationChange("+")}
              />
              <CalcButton
                value={"*"}
                onClick={() => handleOperationChange("*")}
              />
              <CalcButton
                value={"-"}
                onClick={() => handleOperationChange("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClearDisplay()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
