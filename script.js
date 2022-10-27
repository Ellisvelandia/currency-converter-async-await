const getCurrencyOptions = async () => {
  const response = await fetch("https://api.exchangerate.host/symbols");
  const json = response.json();
  console.log(response);
  return json.symbols;
};

getCurrencyOptions();
