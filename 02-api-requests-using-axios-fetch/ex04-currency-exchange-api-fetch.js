const axios = require("axios");
const prompt = require("prompt-sync")({ sigint: true });
let convertFrom = prompt("Enter the currency you want to convert from (e.g., USD): ");
let convertTo = prompt("Enter the currency you want to convert to (e.g., BRL): ");
let amount = prompt("Enter the amount to convert: ");


const url = `https://api.frankfurter.app/latest?base=${convertFrom}&symbols=${convertTo}`;

fetch(url, {
})
  .then((response) => response.json())
  .then((data) => {
    if (!data.rates || !data.rates[convertTo]) {
      throw new Error(
        `This API does not support conversion from ${convertFrom} para ${convertTo}`
      );
    }

    const rate = data.rates[convertTo];
    const convertedAmount = (amount * rate).toFixed(2);

    console.log(`${amount} ${convertFrom} = ${convertedAmount} ${convertTo}`);
  })

  .catch((error) => console.error("Erro:", error.message));

  
axios
  .get(url)
  .then(function (response) {
    if (!response.data.rates || !response.data.rates[convertTo]) {
      throw new Error(
        `This API does not support conversion from ${convertFrom} to ${convertTo}`
      );
    }
    console.log(
      `${amount} ${convertFrom} = ${(
        amount * response.data.rates[convertTo]
      ).toFixed(2)} ${convertTo}`
    );
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Conversion attempt finished.");
  });
