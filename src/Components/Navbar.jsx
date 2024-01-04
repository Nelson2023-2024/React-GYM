//useState
import { useState } from 'react';

//router links
import { Link, NavLink } from 'react-router-dom'



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
        <Link onClick={() => setisNavShowing(false)} className='logo' to='/'>
            Fitness Hub
        </Link>

        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
        
            {
              
                links.map(({name, path, id} ) =>{
                    return(
                        <li key={id}>
                            <NavLink onClick={() => setisNavShowing(prevNavShowing => !prevNavShowing)}  to={path}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>

        <button onClick={() => setisNavShowing(prevNavShowing => !prevNavShowing)} className="nav__toggle-btn">
          {
            isNavShowing  ?  <IoMdClose className='x'/>: <FaBarsStaggered />
          }
          
        </button>
        
      </div>
    </nav>
  )
}

export default Navbar
