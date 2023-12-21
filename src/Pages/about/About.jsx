//files
import PrimaryHeader from '../../Components/PrimaryHeader'
//css
import './about.css'

//images
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

function About() {
  return (
    <>
    <PrimaryHeader title={'About Us'} image={HeaderImage}>
    Welcome to our state-of-the-art gym, where fitness meets community. Our mission is to provide a welcoming environment for individuals of all fitness levels. Whether youre a seasoned athlete or just starting your fitness journey, we have the resources and support you need to reach your goals.
    </PrimaryHeader>

    <section className="about__story">
      <div className="about__story-container container">
        <div className="about__section-img">
          <img src={StoryImage} alt="Our story-image" />
        </div>
        <div className="about__section-content">
        <h1>Our Story</h1>
            <p>At our gym, our story is one of dedication and passion for fitness. We began with a small group of enthusiasts who believed in creating a space for everyone to embrace wellness.</p>
            
            <p>Throughout the years, our community has grown, fostering friendships and transformations. We celebrate every milestone and triumph achieved by our members.</p>
            
            <p>Join us in this journey, where every step forward is a victory, and together, we redefine the limits of fitness.</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="about__vision-container container">
        <div className="about__section-content">
        <h1>Our Vision</h1>
            <p>Our vision transcends conventional fitness. We envision a world where wellness is not just a trend but a way of life.</p>
            
            <p>We strive to build a community where individuals are empowered to embrace healthier habits, not just within our gym but in their daily lives.</p>
        </div>
        <div className="about__section-img">
          <img src={VisionImage} alt="Our vision-image" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="about__mission-container container">
        <div className="about__section-img">
          <img src={MissionImage} alt="Our mission-image" />
        </div>
        <div className="about__section-content">
        <h1>Our Mission</h1>
            <p>Our mission is to inspire and support individuals in achieving their fitness goals, regardless of where they are in their journey.</p>
            
            <p>We aim to create an inclusive environment that motivates and guides our members toward healthier lifestyles, fostering a sense of belonging and accomplishment.</p>

        </div>
      </div>
    </section>
    </>
  )
}

export default About
