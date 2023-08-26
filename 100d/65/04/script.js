const url = "https://goweather.herokuapp.com/weather/Moscow"

async function getWeather(url) {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}

getWeather(url);
