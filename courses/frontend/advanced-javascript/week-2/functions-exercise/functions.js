// Javascript Functions

/*
Exercise : 1
Display the text "Called after 2.5 seconds" on the page 2.5 seconds after the script is loaded.
*/

document.addEventListener("DOMContentLoaded", logInDelay);

function logInDelay() {
  console.log("Document Loaded!!");
  setTimeout(() => {
    const logDisplay = document.getElementById("display1");
    logDisplay.textContent = "Called in 2.5 seconds!!";
  }, 2500);
}

/*
Create a function that takes 2 parameters: delay and stringToLog. Calling this function should display the stringToLog on the page after delay seconds. Call the function you have created with some different arguments. 
*/

function displayTextAfterDelay(delay, text) {
  setTimeout(() => {
    const display = document.getElementById("display2");
    display.textContent = text;
  }, delay);
}

displayTextAfterDelay(5000, "Called in 5 seconds");

/*
Exercise : 3
Create a button in html. When clicking this button, use the function you created in the previous task to display the text Called after 5 seconds on the page 5 seconds after the button is clicked.
*/

const button = document.getElementById("logBtn");
button.addEventListener("click", displayOnClick);

function displayOnClick() {
  console.log("Button Clicked!!");
  displayOnClickAfterDelay(3000, "Displayed Text in 3 seconds after onClick");
}

function displayOnClickAfterDelay(delay, text) {
  setTimeout(() => {
    const display = document.getElementById("display3");
    display.textContent = text;
  }, delay);
}

/*
Exercise : 4
Create two functions and assign them to two different variables. One function displays Earth on the page, the other displays Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try calling the third function once with the Earth function and once with the Saturn function.
*/

const displayEarth = () => {
  const dispEarth = document.getElementById("display4");
  dispEarth.textContent = "Earth";
};

const displaySaturn = () => {
  const dispSaturn = document.getElementById("display5");
  dispSaturn.textContent = "Saturn";
};

function displayPlanet(planetDisplayFunction) {
  planetDisplayFunction();
}

setTimeout(() => {
  displayPlanet(displayEarth);
}, 1000);

setTimeout(() => {
  displayPlanet(displaySaturn);
}, 3500);

/*
Exercise : 5
Create a button with the text "Log location". When this button is clicked, display the user's location (latitude, longitude) on the page using this browser API.
*/

const locationBtn = document.getElementById("locationBtn");
locationBtn.addEventListener("click", displayLocation);

function displayLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      console.log("Geolocation is supported!!");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const displayLatitude = document.getElementById("latitude");
          displayLatitude.textContent = position.coords.latitude;
          location.latitude = position.coords.latitude;

          const displayLongitude = document.getElementById("longitude");
          displayLongitude.textContent = position.coords.longitude;
          location.longitude = position.coords.longitude;

          resolve(location);
        },
        (error) => {
          reject(new Error("Unable to retrieve location!!"));
        }
      );
    } else {
      reject(new Error("Geolocation is not supported!!"));
    }
  });
}

/*
Exercise : 6
Now show that location on a map using e.g. the Google maps api
*/

//set the value of gmp-map value center to the latitude and longitude obtained from the previous exercise.

document.getElementById("showMapBtn").addEventListener("click", showMap);

async function showMap() {
  const { latitude, longitude } = await displayLocation();

  console.log("gmp-map is defined!!" + latitude);
  const mapElement = document.querySelector("gmp-map");
  console.log("MAP ELEMENT :::: " + mapElement);
  mapElement.center = { lat: latitude, lng: longitude };
}

/*
Exercise : 7
Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Add an input in the HTML for the delay (in seconds) and a button; when the button is clicked, read the delay from the input and call runAfterDelay with that delay and a callback that displays something on the page.
*/

function runAfterDelay(delay, callback) {
  console.log("2222222222. " + delay);
  setTimeout(() => {
    console.log("Inside timeout!!");
    callback(delay);
  }, delay);
}

function displayMessage(delay) {
  console.log("333333333 " + delay);
  const displayMsg = document.getElementById("delayDisp");
  displayMsg.textContent = `Should be logged after ${delay} seconds`;
}

const delayBtn = document.getElementById("btn");
delayBtn.addEventListener("click", callDelayFunction);

function callDelayFunction() {
  const delayTime = document.getElementById("delay").value;
  console.log("11111111 " + typeof delayTime);
  runAfterDelay(delayTime, displayMessage);
}

/*
Exercise : 8
Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log a message to the console.
*/

let lastClickTime = 0;

document.addEventListener("click", checkDoubleClick);

function checkDoubleClick() {
  const currentTime = new Date().getTime();
  console.log("Current Time : " + currentTime);
  if (currentTime - lastClickTime < 500) {
    console.log("Double Click Detected!!");
    const displayDoubleClick = document.getElementById("doubleClickDisp");
    displayDoubleClick.textContent = "Double Click Detected!!";
  }
  lastClickTime = currentTime;
}

/*
Exercise : 9

Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke (boolean), logFunnyJoke (function), and logBadJoke (function). If shouldTellFunnyJoke is true it should call logFunnyJoke, which displays a funny joke on the page. Otherwise it should call logBadJoke, which displays a bad joke on the page.
*/

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

function logFunnyJoke() {
  const funnyJokeDisplay = document.getElementById("funnyJoke");
  funnyJokeDisplay.textContent =
    "Why did the bicycle fall over? Because it was two-tired!";
}

function logBadJoke() {
  const badJokeDisplay = document.getElementById("badJoke");
  badJokeDisplay.textContent =
    "Why did the scarecrow win an award? Because he was outstanding in his field!";
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
