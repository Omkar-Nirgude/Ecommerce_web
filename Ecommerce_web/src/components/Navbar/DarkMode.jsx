import React from 'react'
import LightButton from "../../assets/website/light-mode-button.png"
import DarkButton from "../../assets/website/dark-mode-button.png"
import { useEffect, useState } from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState(() =>{
        return localStorage.getItem("theme") || "light" ;
    });

    useEffect(() => {
        const html = document.documentElement ;
        if(theme === "dark"){
            html.classList.add("dark");
        }else{
            html.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);

    },[theme]);

    const toggleTheme = () =>{
        setTheme((currentTheme) =>
        currentTheme === "light" ? "dark" : "light"
    );
    };



  return (
    <div className='relative'>

        <img src={LightButton}
        alt="Switch to dark mode" 
        onClick={toggleTheme}
        className={`absolute right-0 z-10 w-12 cursor-pointer transition-all duration-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        ${ theme === "dark" ? "opacity-0" : "opacity-100"} `} />

        <img
        src={DarkButton}
        alt="Switch to light mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer transition-all duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
        />
    </div>
  )
}

export default DarkMode

