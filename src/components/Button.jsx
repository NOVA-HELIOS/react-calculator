function Button({ value, onClick, type = "number" }) {
  return (
    <button
      type="button"
      className={`calc-button ${type}`}
      onClick={() => onClick(value)}
      aria-label={`Calculator button ${value}`}
    >
      {value}
    </button>
  );
}

export default Button;