import { useState } from "react";
import Form from "./Components/Form/Form";

function App() {
  const [result, setResult] = useState("0.00");
  const [error, setError] = useState("");

  return;

  <Form setResult={setResult} setError={setError} />;

  {
    result ? <p>Wynik po przeliczeniu: {result}</p> : null;
  }
  {
    error ? <p>{error}</p> : null;
  }
}

export default App;
