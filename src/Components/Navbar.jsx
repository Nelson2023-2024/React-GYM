//useState
import { useState } from 'react';

//router links
import { Link, NavLink } from 'react-router-dom'

//logo
import Logo from '../images/logo.png'

//data- fetched
import { links } from '../data'

//react-icons
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";



//css 
import './navbar.css'


function Navbar() {

  const [isNavShowing, setisNavShowing] = useState(false)
  return (
    <nav>
      <div className="container nav__container">
        <Link className='logo' to='/'>
            <img src={Logo} alt="Nav Logo" />
        </Link>

        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
        <IoMdClose onClick={() => setisNavShowing(false)} className='close' />
            {
              
                links.map(({name, path, id} ) =>{
                    return(
                        <li key={id}>
                            <NavLink  to={path}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>

        <button onClick={() => setisNavShowing(!isNavShowing)} className="nav__toggle-btn">
          {
            isNavShowing  ?  <IoMdClose/>: <FaBarsStaggered />
          }
          
        </button>
        
      </div>
    </nav>
  )
}

export default Navbar
