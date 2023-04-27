import { useEffect, useRef, useState } from "react";
import "./Form.css";

const Form = () => {
  const ref = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    ref.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let h1 = document.querySelector("h1");
    h1.textContent = value;
    setValue("");
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <div className="container">
      <h1 id="title">Hello world</h1>
      <form className="Form" data-testid="form" onSubmit={handleSubmit}>
        <input
          ref={ref}
          id="input"
          placeholder="type something..."
          onChange={handleChange}
          value={value}
        />
        <button
          type="button"
          id="button"
          className="button"
          onClick={handleSubmit}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Form;
