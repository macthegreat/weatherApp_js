const apiKey="c3c0404111a8101001807e403c92278f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
 const searchBox=document.querySelector(".search input");
  const searchBtn=document.querySelector(".search button");
  const weatherIcon=document.querySelector(".weather-icon")
    async function checkWeather(city) {
        const response= await fetch(apiUrl +city  + `&appid=${apiKey}`);
        var data= await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML =data.main.humidity + '%';
        document.querySelector(".wind").innerHTML =data.wind.speed + ' km/h';

        if(data.weather[0].main == "clouds"){
            weatherIcon.src="images/cloud.png";
        }else if(data.weather[0].main =="clear"){
            weatherIcon.src="images/clear.png";
        }else if(data.weather[0].main == "rain"){
            weatherIcon.src="images/rain.png";
        }else if(data.weather[0].main =="drizzle"){
weatherIcon.src="images/drizzle.png";
        }
        document.querySelector(".weather").style.display ="block"; 
    } 
    
    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
}); 