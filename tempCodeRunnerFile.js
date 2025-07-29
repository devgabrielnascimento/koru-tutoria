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