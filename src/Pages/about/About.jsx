//files
import PrimaryHeader from '../../Components/PrimaryHeader'
//css
import './about.css'

//images
import HeaderImage from '../../images/header_bg_1.jpg'

function About() {
  return (
    <>
    <PrimaryHeader title={'About Us'} image={HeaderImage}>
    Welcome to our state-of-the-art gym, where fitness meets community. Our mission is to provide a welcoming environment for individuals of all fitness levels. Whether youre a seasoned athlete or just starting your fitness journey, we have the resources and support you need to reach your goals.
    </PrimaryHeader>
    </>
  )
}

export default About
