

//files
import PrimaryHeader from '../../Components/PrimaryHeader'
//css
import './contact.css'

//images
import HeaderImage from '../../images/header_bg_2con.jpg'

//icons
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";





function Contact() {
  return (
    <>
    <PrimaryHeader title={'Get In Touch'} image={HeaderImage}>
    Have inquiries about our gym services? Need assistance? Were here to help! Reach out to us for details on memberships, fitness programs, nutritional advice, or any questions about achieving your fitness goals. Our dedicated team is ready to support you on your fitness journey      </PrimaryHeader>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <h1>Contact Us</h1>
         <form className='contact-form'>
            <div className="form-control">
              <input type="text" placeholder='Your Full Name' />
              <input type="number" placeholder='Your Phone number'/>
            </div>
            <div className="form-control">
              <input type="email" placeholder='Your Email Address'/>
            </div>
            <div className="form-control">
              <textarea  cols="30" rows="10" placeholder='Your message'></textarea>
            </div>

            <button>Submit</button>
         </form>
         
         <div className="contact__social-links">
          <h4>Social links</h4>
          <div className="links">
          <a href="nelsonobuya18@gmail.com" target='_blank' rel='noneferrer noopener'>
            <MdEmail /> Email
          </a>
          <a href="https://www.youtube.com/channel/UC6akhiBeWUcVU1TF4aq859g" target='_blank' rel="noneferrer noopener noreferrer">
            <FaXTwitter /> Twitter
          </a>
          <a href="https://wa.me/+254115720771" target='_blank' rel="noneferrer noopener noreferrer">
            <IoLogoWhatsapp /> Whatsapp
          </a>

          </div>
         
         </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Contact
