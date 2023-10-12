import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);

  return (
    <div>
      <from>
        <label htmFor="amount">Kwota:</label>
        <inout type="number" id="amount" min="0.01" step="0.01" required />
        <button type="submit">Przelicz</button>
      </from>
    </div>
  );
}

export default App;
