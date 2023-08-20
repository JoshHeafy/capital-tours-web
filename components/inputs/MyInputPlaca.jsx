import { useRef } from "react";

export default function MyInputPlaca({ value, onChange, ...props }) {
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^A-Za-z0-9]/g, "");

    if (inputValue.length > 2) {
      inputValue = inputValue.slice(0, 3) + "-" + inputValue.slice(3, 7);
    }

    if (typeof onChange === "function") {
      onChange(inputValue);
    }
    if (inputValue.length === 7) {
      inputRef.current.blur();
    }
  };

  const handleClearInput = () => {
    if (typeof onChange === "function") {
      onChange("");
    }
    inputRef.current.focus();
  };

  return (
    <div className="input-container">
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={handleInputChange}
        maxLength={7}
        placeholder="XXX-XXX"
        ref={inputRef}
        {...props}
      />
      {value && (
        <div className="clear-icon" onClick={handleClearInput}>
          <i className="bx bxs-x-circle" />
        </div>
      )}
    </div>
  );
}
