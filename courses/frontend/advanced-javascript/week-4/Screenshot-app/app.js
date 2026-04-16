import LoginView from "./views/LoginView.js";
import DashboardView from "./views/DashboardView.js";
import ScreenshotView from "./views/ScreenshotView.js";
import ScreenshotService from "./service/ScreenshotService.js";
import User from "./models/User.js";
import store from "./store.js";
import Screenshot from "./models/Screenshot.js";

/* App.js

- Handle Navigation between views
- Handle Login, Logout and Validation
- Handle Screenshot Capture and Preview logic
- Handle Saving Screenshots to the Store

*/

// DOM Helpers

const DOM = {
  app: document.getElementById("app"),
  appContent: document.getElementById("app-content"),
};

let currentImageURL = null;
let currentWebsiteURL = null;

// Event Listeners & Dynamic View Logic

// Login Screen

function showLoginScreen() {
  const loginView = new LoginView();
  DOM.appContent.innerHTML = "";
  DOM.appContent.appendChild(loginView.render());

  const loginBtn = document.getElementById("login-btn");
  //   loginBtn.addEventListener("click", showDashboard);
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Email:", email);
    console.log("Password:", password);

    validateLogin(email, password)
      ? showDashboard()
      : alert("Invalid credentials. Please try again.");
  });
}

function init() {
  // Initialize with test users
  store.users.push(new User("test1@gmail.com", "pass123"));
  showLoginScreen();
}

init();

// Dashboard Screen

function showDashboard() {
  console.log("Login button clicked");
  DOM.appContent.innerHTML = "";
  const dashboardView = new DashboardView();
  DOM.appContent.appendChild(dashboardView.render());

  const captureBtn = document.getElementById("capture-btn");
  captureBtn.addEventListener("click", () => {
    const url = document.getElementById("website-input").value;
    console.log("Website URL:", url);

    showScreenshotPreview(url);
  });

  const listContainer = document.getElementById("screenshot-list");
  listContainer.innerHTML = "";

  const userScreenshots = store.screenshots.filter(
    (s) => s.userEmail === store.currentUser.email
  );

  userScreenshots.forEach((s) => {
    const img = document.createElement("img");
    img.src = s.image;
    img.style.width = "200px";
    img.style.margin = "10px";

    listContainer.appendChild(img);
  });
}

// Screenshot Preview Screen

async function showScreenshotPreview(url) {
  console.log("Capture Screenshot button clicked ::::: ", url);
  DOM.appContent.innerHTML = "";
  const screenshotView = new ScreenshotView();
  DOM.appContent.appendChild(screenshotView.render());

  const backBtn = document.getElementById("back-btn");
  backBtn.addEventListener("click", showDashboard);

  const saveBtn = document.getElementById("save-btn");
  console.log("Save Button Element:", saveBtn);
  saveBtn.addEventListener("click", saveScreenshot);

  // Implement screenshot capture logic here using ScreenshotService

  const loadingBarContainer = document.getElementById("loading-bar-container");
  const loadingBar = document.getElementById("loading-bar");

  loadingBarContainer.style.display = "block";
  loadingBar.style.width = "30%";

  const imageURL = await ScreenshotService.captureScreenshot(url);
  loadingBar.style.width = "60%";
  console.log("Screenshot captured:", imageURL);
  loadingBar.style.width = "100%";

  currentImageURL = imageURL;
  currentWebsiteURL = url;

  const previewImage = document.getElementById("preview-image");
  previewImage.src = imageURL;

  loadingBarContainer.style.display = "none";

  saveBtn.disabled = false;
}

function saveScreenshot() {
  console.log("Save Screenshot button clicked");
  // Implement save screenshot logic here
  console.log("Current user in save screenshot ::::: ", store.currentUser);
  const screenshot = new Screenshot(
    Date.now(),
    currentWebsiteURL,
    currentImageURL,
    store.currentUser.email
  );

  store.screenshots.push(screenshot);
  console.log("Screenshot saved to store:", screenshot);

  alert("Screenshot saved!");

  showDashboard();
}

// Login Validation Logic

function validateLogin(email, password) {
  console.log("Validating login for:", email);
  // Implement login validation logic here using the Store
  const user = store.users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    store.currentUser = user;
    return true;
  }

  return false;
}
