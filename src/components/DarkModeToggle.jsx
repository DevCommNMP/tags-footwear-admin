import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return (
      savedMode ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    const applyMode = () => {
      document.documentElement.classList.remove(
        mode === "dark" ? "light" : "dark"
      );
      document.documentElement.classList.add(mode);
      localStorage.setItem("mode", mode);
    };

    applyMode();
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <a className="nav-link btn-icon darkmode" onClick={toggleMode}>
      {" "}
      <i className="material-icons md-nights_stay"></i>{" "}
    </a>
  );
}

export default DarkModeToggle;
