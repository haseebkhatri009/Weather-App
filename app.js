const form = document.querySelector("#myForm");
const cityInput = document.querySelector("#cityInput");
// https://home.openweathermap.org/api_keys
const API_KEY = "ad66066f121ffc1415f9a0c27fc411c1";
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");

const formHandler = async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();

  temp.innerText = data.main.temp;
  humidity.innerText = data.main.humidity;

  console.log("🚀 ~ formHandler ~ response:", data);
};

form.addEventListener("submit", formHandler);
