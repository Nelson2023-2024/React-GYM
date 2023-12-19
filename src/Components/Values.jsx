
import Image from '../images/values.jpg'

import SectionHead from './SectionHead'

//icons
import { GiCutDiamond } from "react-icons/gi";

//data js
import { values } from '../data'

//reusable component
import Card from '../UI/Card'

function Values() {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <img className='values-image' src={Image} alt="values-image" />
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond/>} title={'Values'}></SectionHead>
          <p>At our gym, we uphold a set of core values that guide us in helping you achieve your fitness goals. These values define who we are and how we approach fitness:</p>         
          <div className="values__wrapper">
            {
              values.map(({id, icon: IconComponent, title, desc }) => {
                return(
                  <Card className={`values__values`} key={id}>
                    <span><IconComponent/></span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </div>

    </section>
  )
}

export default Values
