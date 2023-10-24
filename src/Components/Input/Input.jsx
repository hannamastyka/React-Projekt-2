import styles from "./Input.module.css";
const Input = () => {
  return (
    <>
      <label htmlFor={"amount"}>{"kwota"}</label>
      <input
        type={"number"}
        id={"amount"}
        min={"0.01"}
        step={"0.01"}
        required={true}
        name={"amount"}
        className={styles.amountInput}
      />
    </>
  );
};

export default Input;
