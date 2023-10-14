import { useState } from "react";

function App() {
  const [result, setResult] = useState("0.00");
  const [error, setError] = useState("");
  const calculateValue = (event) => {
    event.preventDefault();
    const value = event.currentTarget.elements.amount.value;

    const rate = 4.5793;
    setResult((value * rate).toFixed(2));
    fetch()
      .then()
      .catch(() => setError(""));
  };

  return (
    <div>
      <from onSumbit={calculateValue}>
        <label htmFor="amount">Kwota:</label>
        <input type="number" id="amount" min="0.01" step="0.01" required />
        <button type="submit">Przelicz</button>
      </from>
      {result ? <p>Wynik po przeliczeniu: {result}</p> : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
}

export default App;
