export default function MyInput({
  title,
  required,
  textArea = false,
  ...props
}) {
  return (
    <div className="my_input">
      <label className="title">
        {title}
        <span className="obligatorio">*</span>
      </label>
      {textArea ? (
        <textarea required={required} {...props} />
      ) : (
        <input type="text" required={required} {...props} />
      )}
    </div>
  );
}
