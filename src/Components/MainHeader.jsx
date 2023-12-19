import { Link } from "react-router-dom"

//css
import '../Pages/home/home.css'


//images
import Image from '../images/main_header.png'

function MainHeader() {
  return (
   <header className="main__header">
    <div className="container main__header-container">
      <div className="main__header-left">
      <h4>#JoinTheMovement - Start Your Fitness Journey Today</h4>
        <h1>Transform Your Body, Transform Your Life</h1>
        <p>Welcome to our gym, where fitness meets excellence! Were dedicated to helping you achieve your fitness goals, whether its building muscle, improving cardio, or staying fit.</p>
          <Link to='/plans' className="btn lg">Get Started</Link>
      </div>

      <div className="main__header-right">
        <div className="main__header-circle"></div>
        <div className="main__header-img">
          <img src={Image} alt="image- header" />
        </div>
      </div>


    </div>
   </header>
  )
}

export default MainHeader
