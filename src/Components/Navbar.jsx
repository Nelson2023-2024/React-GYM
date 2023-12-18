//router links
import { Link, NavLink } from 'react-router-dom'

//logo
import Logo from '../images/logo.png'

//data- fetched
import { links } from '../data'

//react-icons
import { FaBarsStaggered } from "react-icons/fa6";


//css 
import './navbar.css'


function Navbar() {
  return (
    <nav>
      <div className="container nav__container">
        <Link className='logo' to='/'>
            <img src={Logo} alt="Nav Logo" />
        </Link>

        <ul className="nav__links">
            {
                links.map(({name, path, id} ) =>{
                    return(
                        <li key={id}>
                            <NavLink to={path}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>

        <button className="nav__toggle-btn">
          <FaBarsStaggered />
        </button>
        
      </div>
    </nav>
  )
}

export default Navbar
