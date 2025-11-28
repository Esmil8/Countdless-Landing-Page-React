import NavBar from "./Navbar";

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header ({ darkMode , setDarkMode }: Props) {

return (
    <header>
        <NavBar darkMode = {darkMode} setDarkMode = {setDarkMode}  />
    </header>
)
}