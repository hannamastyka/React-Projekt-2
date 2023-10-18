const Form = (props) => {
  const { setError, setResult } = props;
  // useState dla currency

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
    <form onSumbit={calculateValue}>
      <Input
        label={"Kwota:"}
        type={"number"}
        id={"amount"}
        min={"0,1"}
        step={"0.01"}
        required
      />

      <button type="submit">Przelicz</button>
    </form>
  );
};

export default Form;
