import type React from "react";
import { CTA2 } from "./CTAS";

type Props = {

    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBar({ darkMode, setDarkMode}: Props) {


    return (
        <nav id="" className="flex w-full items-center justify-between p-4" aria-label="Main navigation">

    <h2 className="font-bold md:text-xl p-4  justify-start  hover: rounded-md hover:bg-yellow-400 hover:text-black hover:text-lg hover:animate-bounce duration-300">Countdless</h2>

    <ul className="flex items-center space-x-3">

        <li>
            <button onClick={() => setDarkMode(!darkMode)} className="p-3 rounded"> {darkMode ? "☀️" : "🌙"} </button>
        </li>

        <li className="hidden sm:block"> <a href="#contact" className={`hover:bg-black hover:text-white font-sans border border-gray-500 rounded-md px-4 py-3 ${darkMode? "text-white" : "text-black"}`}> Contact </a> 
        
        </li>

        <li className="p-3">
        <CTA2></CTA2>
        
        </li>

    </ul>

    </nav>

    )
}