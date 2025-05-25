window.onload = (event) => {
  const themeToggle = document.getElementById("themeToggle");
  const lightIcon = document.getElementById("lightIcon");
  const darkIcon = document.getElementById("darkIcon");
  const body = document.body;

  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem("theme") || "dark";
  applyThemeStyles(currentTheme);

  // Update button appearance based on current theme
  updateButtonAppearance(currentTheme);

  // Toggle theme on click
  themeToggle.addEventListener("click", function () {
    const newTheme = body.style.backgroundColor === "white" ? "dark" : "light";
    applyThemeStyles(newTheme);
    localStorage.setItem("theme", newTheme);
    updateButtonAppearance(newTheme);
  });

  function applyThemeStyles(theme) {
    if (theme === "light") {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    } else {
      body.style.backgroundColor = "rgb(30 41 59)";
      body.style.color = "white";
    }
  }

  function updateButtonAppearance(theme) {
    if (theme === "light") {
      lightIcon.classList.add("d-none");
      darkIcon.classList.remove("d-none");
      themeToggle.style.backgroundColor = "#343a40";
      themeToggle.style.color = "white";
    } else {
      darkIcon.classList.add("d-none");
      lightIcon.classList.remove("d-none");
      themeToggle.style.backgroundColor = "#f8f9fa";
      themeToggle.style.color = "black";
    }
  }
};
