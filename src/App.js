import { useState } from "react";
import Form from "./Components/Form/Form";
import styles from "./App.module.css";
function App() {
  const [result, setResult] = useState("0.00");
  const [error, setError] = useState("");

  return (
    <main className={styles.app}>
      <Form setResult={setResult} setError={setError} />

      {result ? (
        <p className={styles.paragraph}>Wynik po przeliczeniu: {result}</p>
      ) : null}

      {error ?  <p className={styles.paragraph}>{error}</p> : null}
    </main>
  );
}

export default App;
