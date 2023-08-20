import { useState } from "react";

export default function MyInputNumber({
  title,
  required,
  max,
  onChange,
  ...props
}) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, "");

    if (max && value.length > max) {
      value = value.slice(0, max);
    }

    setInputValue(value);

    const parsedValue = parseInt(value, 10);
    if (!Number.isNaN(parsedValue)) {
      if (typeof onChange === "function") {
        onChange(parsedValue);
      }
    } else {
      if (typeof onChange === "function") {
        onChange("");
      }
    }
  };

  return (
    <div className="my_input">
      <label className="title">
        {title}
        <span className="obligatorio">*</span>
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        required={required}
        {...props}
      />
    </div>
  );
}
