import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">FRONT-END FRAMEWORK PROJECT</p>
        <h1>React Calculator</h1>
        <p className="subtitle">
          A component-based calculator built with React, props, and state.
        </p>
      </section>

      <Calculator />

      <footer>
        Built with React + Vite
      </footer>
    </main>
  );
}

export default App;