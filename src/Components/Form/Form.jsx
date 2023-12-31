import Input from "../Input/Input";
import Select from "../Select/Select";
import Button from "../Button/Button";
const Form = ({ setResult, setError }) => {
  const calculateValue = (event) => {
    event.preventDefault();
    const value = event.target.amount.value;
    const currency = event.target.currency.value;
    fetch(
      `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.rates?.length > 0) {
          const exchangeRate = data.rates[0].mid;
          const result = value * exchangeRate;

          setResult(result.toFixed(2));
          setError("");
        } else {
          setError("Wystąpił błąd podczas pobierania danych z API.");
        }
      })
      .catch(() => {
        setError("Wystąpił błąd podczas pobierania danych z API.");
      });
  };
  return (
    <form onSubmit={calculateValue}>
      <Input />
      <Select />
      <Button />
    </form>
  );
};

export default Form;
