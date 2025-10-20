import { useEffect, useState } from "react";

const getSystemPref = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark" : "light";

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || getSystemPref();
  });

  useEffect(() => {
    const root = document.documentElement; // <html>
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        marginLeft: 12,
        border: "none",
        background: "rgba(255,255,255,.25)",
        color: "#fff",
        padding: "8px 10px",
        borderRadius: 10,
        cursor: "pointer",
        fontWeight: 600
      }}
      title={theme === "dark" ? "Switch to Light mode" : "Switch to Dark mode"}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}