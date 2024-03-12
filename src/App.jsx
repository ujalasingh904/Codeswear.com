import Card from "./Components/card"
import Hero from "./Components/hero"
import Category from "./Components/category"
import Navbar from "./Components/navbar" 
import image1 from "./assets/card/caps.png"
import image2 from "./assets/card/hoodie.png"
import image3 from "./assets/card/mousepad.png"
import image4 from "./assets/card/mugs.webp"
import image5 from "./assets/card/oversizedtshirt.webp"
import image6 from "./assets/card/polotshirts.webp"
import image7 from "./assets/card/sweatshirt.webp"
import image8 from "./assets/card/tshirt.webp"
import image9 from "./assets/card1/anime.webp"
import image10 from "./assets/card1/combooffers.webp"
import image11 from "./assets/card1/customized.webp"
import image12 from "./assets/card1/fitness.webp"
import image13 from "./assets/card1/gaming.webp"
import image14 from "./assets/card1/lifestyle.webp"
import image15 from "./assets/card1/programming.webp"
import image16 from "./assets/card1/trending.webp"
import Services from "./Components/services"
import Footer from "./Components/footer"
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from "react"



const CardArray = [
  {
    id: 1,
    img: image1,
    aosDelay: "100"

  },
  {
    id: 2,
    img: image2,
    aosDelay: "100"
  },
  {
    id: 3,
    img: image3,
    aosDelay: "200"
  },
  {
    id: 4,
    img: image4,
    aosDelay: "200"
  },
  {
    id: 5,
    img: image5,
    aosDelay: "300"
  },
  {
    id: 6,
    img: image6,
    aosDelay: "300"
  },
  {
    id: 7,
    img: image7,
    aosDelay: "400"
  },
  {
    id: 8,
    img: image8,
    aosDelay: "400"
  },
];

const Card1Array = [
  {
    id: 1,
    img: image9,
    aosDelay: "100"

  },
  {
    id: 2,
    img: image10,
    aosDelay: "100"
  },
  {
    id: 3,
    img: image11,
    aosDelay: "200"
  },
  {
    id: 4,
    img: image12,
    aosDelay: "200"
  },
  {
    id: 5,
    img: image13,
    aosDelay: "300"
  },
  {
    id: 6,
    img: image14,
    aosDelay: "300"
  },
  {
    id: 7,
    img: image15,
    aosDelay: "400"
  },
  {
    id: 8,
    img: image16,
    aosDelay: "400"
  },
];



const App = () => {

  useEffect(() => {
    AOS.init(
      {
        duration:600,
        easing:"ease-in-sine",
        delay:100,
        offset:100,
      });
      AOS.refresh();
  },[])
  
  return (
    <div >
      <Navbar /> 
      <Hero />
      <Card CardArray={CardArray} heading={"COLLECTIONS"}/>
      <Card CardArray={Card1Array} heading={"THEME"} />
      <Category/>
      <Services/>
      <Footer/>
      
      
    </div>
  )
}

export default App
