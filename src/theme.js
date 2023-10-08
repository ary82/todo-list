const themeButton = document.getElementById("theme_button");
const themePath = document.getElementById("theme_path");
if (!localStorage.getItem("currentMode")) {
  localStorage.setItem("currentMode", "dark");
}
if (localStorage.getItem("currentMode") === "light") {
  themeButton.classList.remove("moon");
  document.querySelector("html").className = "light";
  themePath.setAttribute(
    "d",
    "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13",
  );
}

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle("moon");
  document.querySelector("html").classList.toggle("light");
  if (!document.querySelector("html").classList.contains("light")) {
    localStorage.setItem("currentMode", "dark");
    themePath.setAttribute(
      "d",
      "M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z",
    );
  } else {
    localStorage.setItem("currentMode", "light");
    themePath.setAttribute(
      "d",
      "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13",
    );
  }
});
