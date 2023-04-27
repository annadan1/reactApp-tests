import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../../store/reducers/counterReducers.js";
import { useDispatch, useSelector } from "react-redux";
import "./counter.css";
import { useState } from "react";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const [newValue, setNewValue] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { action } = e.target.dataset;
    if (action === "plusByAmount") {
      dispatch(incrementByAmount(newValue));
    } else if (action === "minusByAmount") {
      dispatch(decrementByAmount(newValue));
    }
    setNewValue("");
  };

  return (
    <div className="container">
      <h2 data-testid="counter-value" id="counter-value">
        {value}
      </h2>
      <input
        data-testid="input"
        id="input"
        placeholder="Введите значение"
        type={"number"}
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <div className="buttonsContainer">
        <button
          data-action="plusByAmount"
          data-testId="plusByAmount"
          id="plusByAmount"
          onClick={handleClick}
        >
          +
        </button>
        <button
          data-action="minusByAmount"
          data-testId="minusByAmount"
          id="minusByAmount"
          onClick={handleClick}
        >
          -
        </button>
        <button
          type="button"
          data-action="plus"
          data-testId="plus"
          id="plus"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          type="button"
          data-action="minus"
          data-testId="minus"
          id="minus"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
