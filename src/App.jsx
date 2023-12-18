
import './App.css'
import Navbar from './Components/Navbar'
import About from './Pages/about/about'
import Contact from './Pages/contact/Contact'
import Gallery from './Pages/gallery/Gallery'
import Home from './Pages/home/Home'
import Notfound from './Pages/notfound/Notfound'
import Plans from './Pages/plans/Plans'
import Trainer from './Pages/trainers/Trainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    
     <BrowserRouter>
      <Navbar/>
     <Home/>   
     <About/>
     <Contact/>
     <Notfound/>
     <Gallery/>
     <Plans/>
     <Trainer/>
     </BrowserRouter>
    
  )
}

export default App
