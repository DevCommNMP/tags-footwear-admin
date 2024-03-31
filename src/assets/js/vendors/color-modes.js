document.addEventListener("DOMContentLoaded", (event) => {
    (() => {
      "use strict";
  
      // Check if there's a mode stored in localStorage
      const savedMode = localStorage.getItem("mode");
  
      // Apply the saved mode or default to system preference
      if (savedMode) {
        if (savedMode === "dark") {
          toggleDarkMode();
        } else {
          toggleLightMode();
        }
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        toggleDarkMode();
      } else {
        toggleLightMode();
      }
  
      // Handle dark/light mode toggle
      document
        .querySelector(".darkmode")
        .addEventListener("click", function () {
          if (document.documentElement.classList.contains("dark")) {
            toggleLightMode();
          } else {
            toggleDarkMode();
          }
        });
  
      // Function to toggle to dark mode
      function toggleDarkMode() {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        localStorage.setItem("mode", "dark");
      }
  
      // Function to toggle to light mode
      function toggleLightMode() {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("mode", "light");
      }
    })();
  });