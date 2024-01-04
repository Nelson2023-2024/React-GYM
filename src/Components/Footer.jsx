//router
import { Link } from "react-router-dom"


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
                   Fitness Hub
                </Link>
                <p>
                    Welcome to Fitness Hub, your premier destination for fitness and well-being. Our mission is to provide a supportive community where you can achieve your fitness goals and lead a healthy lifestyle. Join us on the journey to a stronger, happier you!              
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
                <h4>Get in Touch</h4>
                <Link to='/contact'>Contact us</Link>
                <Link to='/s'>Support</Link>
                
            </article>
        </div>
        <div className="footer__copyright">

            <p>All rights reserved by <FaRegCopyright /> Nelson 2023 </p>
            <small>Made with <FaHeart className="heart"/> by Nelson  </small>
        </div>
    </footer>
  )
}

export default Footer
