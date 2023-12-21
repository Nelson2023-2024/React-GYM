
import './App.css'
import Footer from './Components/Footer'
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
      <Routes>
        <Route element={<Home/>} index/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Contact/>} path='/contact'/>
        <Route element={<Gallery/>} path='/gallery'/>
        <Route element={<Plans/>} path='/plans'/>
        <Route element={<Trainer/>} path='/trainers'/>
        <Route element={<Notfound/>} path='*' />
      </Routes>
      <Footer/>
     </BrowserRouter>
    
  )
}

export default App
