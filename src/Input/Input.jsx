const Input = () => {
  return (
    <>
      <label htmlFor={"amount"}>{"kwota"}</label>
      <input
        type={"amount"}
        id={"amount"}
        min={"0.01"}
        step={"0.01"}
        required={true}
        name={"amount"}
      />
    </>
  );
};

export default Input;
