function currentTime() {
  const now = new Date();
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.querySelector(".status-bar").textContent = now.toLocaleTimeString(
    [],
    { hour: "2-digit", minute: "2-digit" }
  );
  document.querySelector(".hour").textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
  });
  document.querySelector(".minute").textContent = now.toLocaleTimeString([], {
    minute: "2-digit",
  });
  document.querySelector(".day").textContent = weekdays[now.getDay()];
}

setInterval(currentTime, 1000);

var iconCode;
let outputElement;
function getWeather() {
  const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?id=1273865&appid=8bd0f35bab9f636202591b6304ec2ffa";
  fetch(apiURL)
    .then((weather) => {
      if (!weather.ok) {
        throw new Error("Network response was not ok");
      }
      return weather.json();
    })
    .then((data) => {
      var iconurl =
        "http://openweathermap.org/img/w/" + [data.weather[0].icon] + ".png";
      document.querySelector(".weather-icon").src = iconurl;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getWeather();

function openPage(event, pageName) {
  var i, safeArea, navpill;

  safeArea = document.getElementsByClassName("safeArea");
  for (i = 0; i < safeArea.length; i++) {
    safeArea[i].style.display = "none";
  }

  navpill = document.getElementsByClassName("navpill");
  for (i = 0; i < navpill.length; i++) {
    navpill[i].className = navpill[i].className.replace(" active", "");
  }

  document.getElementById(pageName).style.display = "flex";
  event.currentTarget.className += " active";
}

function openMessage(messageId) {
  document.getElementsByClassName("rooster")[0].style.display = "none";
  document.getElementById(messageId).style.display = "flex";
}

function goBack() {
  document.getElementById("allMsgs").style.display = "flex";
  document.getElementById("DLVRY").style.display = "none";
}

function stopwatch(){
    
}