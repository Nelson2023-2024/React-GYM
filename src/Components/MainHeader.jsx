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
        <h4>#100DaysOfWorkOut</h4>
        <h1>Jin The Legends Of The Fitness World</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat et qui, quibusdam earum architecto quae iste voluptates, ullam voluptas, mollitia sequi est! Ut aliquid magnam a dolor amet eos consequuntur.

        </p>
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
