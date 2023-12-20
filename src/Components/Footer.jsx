//router
import { Link } from "react-router-dom"

//imgas
import Logo from  '../images/logo.png'
import { FaHeart } from "react-icons/fa";


//icons
import { FaFacebookF } from "react-icons/fa6";
<FaFacebookF />
import { FaInstagramSquare } from "react-icons/fa";
<FaInstagramSquare />
import { IoLogoYoutube } from "react-icons/io";
<IoLogoYoutube />
import { BsWhatsapp } from "react-icons/bs";
<BsWhatsapp />
import { FaLinkedin } from "react-icons/fa6";
<FaLinkedin />
import { FaRegCopyright } from "react-icons/fa";


function Footer() {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link className="logo" to={'/'}>
                    <img src={Logo} alt="image-logo" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam tempora assumenda cumque sit mollitia id quos expedita voluptas autem!
                </p>

                <div className="footer__socials">
                    <a href="" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="" target="_blank" rel='noreferrer noopener'><FaInstagramSquare /></a>
                    <a href=""  target="_blank" rel='noreferrer noopener'><IoLogoYoutube/></a>
                    <a href="" target="_blank" rel='noreferrer noopener'><BsWhatsapp /></a>
                    <a href="" target="_blank" rel='noreferrer noopener'><FaLinkedin /></a>
                </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>

            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Study</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communities</Link>
                <Link to='/s'>FAQS</Link>
                
            </article>

            <article>
                <h4>Get in Touch</h4>
                <Link to='/contact'>Contact us</Link>
                <Link to='/s'>Support</Link>
                
            </article>
        </div>
        <div className="footer__copyright">

            <p>All rights reserved by <FaRegCopyright /> Nelson 2023 </p>
            <small>Made with <FaHeart /> by Nelson  </small>
        </div>
    </footer>
  )
}

export default Footer
