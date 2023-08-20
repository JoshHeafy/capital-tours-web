export default function MyButton({ name, load, black = false, ...props }) {
  return (
    <button
      className={
        load ? "my_button_loader" : !black ? "my_button" : "my_button_black"
      }
      type="submit"
      disabled={load}
      {...props}
    >
      {load ? <div className="load"></div> : name}
    </button>
  );
}
