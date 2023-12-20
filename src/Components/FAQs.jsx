import SectionHead from "./SectionHead"
import { FaQuestion } from "react-icons/fa6";
<FaQuestion />

import { faqs } from "../data";
import FAQ from "./FAQ";
import Card from "../UI/Card";


function FAQs() {
  return (

    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead icon={<FaQuestion/>} title='Frequently Asked Questions'/>
            <div className="faqs__wrapper">
                {
                    faqs.map(({id, question, answer}) => (
                        <FAQ key={id} question={question} answer={answer}/>
                    ))
                }
            </div>

        </div>
    </section>
   
  )
}

export default FAQs
