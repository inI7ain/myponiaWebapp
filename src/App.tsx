import { useState } from 'react'
import Navbar from './modules/navbar/navbar.module'
import './App.css'
import { Carousel, Image } from './modules/carousel/carousel.module'

function App() {
  const [count, setCount] = useState(0)
  const images: Image[] = [
    {
      source: "/elvenCapital.webp",
      alt: "Elven Capital",
      dimensions: {
        width: "100%",
        height: "40%"
      }
    },
    {
      source: "/raidersCamp.jpg",
      alt: "Raider's Camp",
      dimensions: {
        width: "100%",
        height: "40%"
      }
    },
    {
      source: "/portalToLysa.webp",
      alt: "Portal to Lysa",
      dimensions: {
        width: "100%",
        height: "40%"
      }
    }
  ]

  return (
    <>
      <Navbar />
      <div className="container">
        <div className='carousel'>
          <Carousel imgArray={images} />
        </div>
      </div>
    </>
  )
}

export default App
