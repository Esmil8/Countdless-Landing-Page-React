
import Header from './Components/Header.tsx'
import Hero from './Components/Hero.tsx'
import Footer from './Components/Footer.tsx'
import './App.css'
import Form1 from './Components/Form1.tsx'
import { useEffect, useState } from 'react'

export default function App() {


const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    if (darkMode) {
      document.body.classList.toggle('bg-neutral-800');
      document.body.classList.toggle('text-white');
      
    }else {
      document.body.classList.remove('bg-neutral-800')
      document.body.classList.remove('text-white')
    }
  }, [darkMode] )

  return (

    <div>
    <Header darkMode={darkMode} setDarkMode={setDarkMode} /> 
    <Hero darkMode={darkMode}/>
    <Form1 darkMode = {darkMode}/>
    <Footer />
    </div>
  );
}
