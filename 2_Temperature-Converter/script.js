function convertTemperature() {
  const inputValue = document.getElementById("temperature-input").value;
  const temperatureType = document.getElementById("temperature-type").value;
  let resultValue;

  if (temperatureType === "fahrenheit") {
    resultValue = ((inputValue - 32) * 5) / 9;
  } else if (inputValue === "celsius") {
    resultValue = (inputValue * 9) / 5 + 32;
  } else {
    resultValue = inputValue - 273.15;
  }
  document.getElementById("result-input").value = resultValue;
}
