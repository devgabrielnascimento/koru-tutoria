const axios = require("axios");
const prompt = require("prompt-sync")({ sigint: true });
const convertFrom = prompt(
  "Enter the currency you want to convert from (e.g., USD): "
).toUpperCase();
const convertTo = prompt(
  "Enter the currency you want to convert to (e.g., BRL): "
).toUpperCase();
const amount = prompt("Enter the amount to convert: ");

function isValidCurrency(amount) {
  return /^(\d{1,3}(\.\d{3})*|\d+)(,\d{2})?$/.test(amount);
}
async function currencyConverter(convertFrom, convertTo, amount) {
  const url = `https://api.frankfurter.app/latest?base=${convertFrom}&symbols=${convertTo}`;
  try {
    const response = await axios.get(url);
    const data = response.data;

    const rate = data.rates[convertTo];
    const convertedAmount = (amount * rate).toFixed(2);
    console.log(
      `${amount.toLocaleString(
        "pt-BR"
      )} ${convertFrom} = ${convertedAmount} ${convertTo}`
    );
  } catch (error) {
    console.error("Erro:", error.message);
  }
}

function main() {
  if (!isValidCurrency(amount)) {
    console.error("Invalid amount format. Use '1.000,00','1000.00 or 1000'.");
    return;
  }

  const numericAmount = parseFloat(amount.replace(/\./g, "").replace(",", "."));
  currencyConverter(convertFrom, convertTo, numericAmount);
}
main();
