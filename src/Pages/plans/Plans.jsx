
//data js
import { plans } from '../../data'

//files
import PrimaryHeader from '../../Components/PrimaryHeader'

//css
import './plans.css'

//images
import HeaderImage from '../../images/header_bg_3.jpg'


//reusable componect
import Card from '../../UI/Card'

function Plans() {
  return (
    <>
    <PrimaryHeader title={'Membership Plans'} image={HeaderImage}>
    Discover our gyms vitality through compelling images revealing our facilities, workouts, and lively community. Explore defining moments shaping our fitness journey, extending a warm invitation to be part of our active community.    </PrimaryHeader>

    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) =>{
            return(
              <Card className={'plan'} key={id}>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/month</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) => {
                    return(
                      <p key={index} className={!available ? 'disabled' : ''}>
                        {feature}
                      </p>
                    )
                  } )
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>
            )
          })
        }
      </div>
    </section>
    
    </>
  )
}

export default Plans
