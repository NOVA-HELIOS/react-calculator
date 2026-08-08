function Display({ value }) {
  return (
    <div className="display" aria-live="polite">
      {value || "0"}
    </div>
  );
}

export default Display;