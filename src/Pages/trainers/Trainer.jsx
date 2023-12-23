import './trainers.css'

//reusable header
import PrimaryHeader from '../../Components/PrimaryHeader'

//images
import HeaderImage from '../../images/header_bg_4.jpg'

//data.js
import { trainers } from '../../data'
import Train from '../../Components/Train'

//icons
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";



function Trainer() {
  return (
    <>
    <PrimaryHeader title='Trainers' image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium atque iste quis neque quo, laborum odit architecto a quam, at beatae illo ducimus expedita repudiandae corporis, aut earum quos.
    </PrimaryHeader>

    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return(
              <Train key={id} image={image} name={name} job={job} socials={[
                {icon: <FaInstagram/>, link:socials[0]},
                {icon: <FaXTwitter/>, link:socials[1]},
                {icon: <FaFacebookF/>, link:socials[2]},
                {icon: <FaLinkedin/>, link:socials[3]},
               
              ]}/>
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainer
