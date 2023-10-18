const Input = (props) => {
  const { label, type, id, min, step, required } = props;
  return (
    <>
      <label htmFor={id}>{label}</label>
      <input type={number} id={id} min={min} step={step} required={required} />
    </>
  );
};

export default Input;
