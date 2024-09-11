import React from 'react'

import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Produits from "./components/Produits/Produits"
import Aos from 'aos';
import "aos/dist/aos.css";
import TopProduits from './components/TopProduits/TopProduits';

const App = () => {

  React.useEffect(()=> {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    Aos.refresh();
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Produits/>
      <TopProduits/>
    </div>
  )
}

export default App
