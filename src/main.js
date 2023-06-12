const switchToggle = document.querySelector("#switch-toggle");
const html = document.querySelector("html");
let isDarkMode = false;
const localDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
const darkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
const lightIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>';

if (localDarkMode) {
  isDarkMode = localDarkMode;
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", isDarkMode);
  switchMode();
}

function switchMode() {
  if (isDarkMode) {
    html.classList.add("dark");
    switchToggle.classList.remove("bg-gold", "-translate-x-2");
    switchToggle.classList.add("bg-dark_pine", "translate-x-full");
    setTimeout(() => {
      switchToggle.innerHTML = darkIcon;
    }, 300);
  } else {
    html.classList.remove("dark");
    switchToggle.classList.add("bg-gold", "-translate-x-2");
    switchToggle.classList.remove("bg-dark_pine", "translate-x-full");
    setTimeout(() => {
      switchToggle.innerHTML = lightIcon;
    }, 300);
  }
}
switchMode();

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
