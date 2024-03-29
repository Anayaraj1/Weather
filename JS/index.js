const apikey = "366f46f7157adf29b6e9588be3f6f27a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./Assets/images/clouds.png"
        }
        else if (data.weather[0].main == "clear") {
            weatherIcon.src = "./Assets/images/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./Assets/images/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./Assets/images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./Assets/images/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}


searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);

})

