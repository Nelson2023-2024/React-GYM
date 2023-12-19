//icons
import { GiCrownedSkull } from "react-icons/gi";
import { FaAngleDoubleRight } from "react-icons/fa";

//resusable component
import SectionHead from "./SectionHead";

//data js 

import { programs } from "../data";
import Card from "../UI/Card";

//router
import { Link } from "react-router-dom";

//css
import '../index.css'



function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<GiCrownedSkull />} title='Programs'/>
        
        <div className="programs__wrapper">
          {
            programs.map(({ id, icon: IconComponent, title, info, path }) => {
              return (
                <Card key={id} className='programs__program'>
                  <span><IconComponent /></span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn sm">Learn More <FaAngleDoubleRight /></Link>
                </Card>
              );
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Programs;