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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ratione, vero molestias dolore consequuntur eveniet enim impedit qui, odit doloremque illum et aperiam voluptate. Odio, iste unde! Ipsa, distinctio dolore.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorem natus necessitatibus tempora ipsam qui voluptates vel eius, at commodi. Porro consequuntur, cumque quam harum sed ipsam excepturi asperiores rem?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed at quasi natus distinctio illo, pariatur, dicta omnis id, possimus commodi sit. Minima assumenda, facere nisi ut unde atque fugit?</p>

        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="about__vision-container container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ratione, vero molestias dolore consequuntur eveniet enim impedit qui, odit doloremque illum et aperiam voluptate. Odio, iste unde! Ipsa, distinctio dolore.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorem natus necessitatibus tempora ipsam qui voluptates vel eius, at commodi. Porro consequuntur, cumque quam harum sed ipsam excepturi asperiores rem?</p>
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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ratione, vero molestias dolore consequuntur eveniet enim impedit qui, odit doloremque illum et aperiam voluptate. Odio, iste unde! Ipsa, distinctio dolore.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorem natus necessitatibus tempora ipsam qui voluptates vel eius, at commodi. Porro consequuntur, cumque quam harum sed ipsam excepturi asperiores rem?</p>


        </div>
      </div>
    </section>
    </>
  )
}

export default About
