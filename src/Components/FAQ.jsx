

import { IoIosArrowUp } from "react-icons/io";
<IoIosArrowUp />
import { IoIosArrowDown } from "react-icons/io";
<IoIosArrowDown />
import { useState } from "react";



function FAQ({question, answer}) {

    const [isAnswerShowing,  setIsAnswerShowing] = useState(false)
  return (
    <article  onClick={() => setIsAnswerShowing(previsShowing => !previsShowing)} className="faq">
        <div >
            <h4>{question}</h4>
            <button className="faq__icon" style={{cursor:'pointer'}}>
            { isAnswerShowing ? <IoIosArrowUp/> : <IoIosArrowDown />  }
            </button>
        </div>
        {isAnswerShowing &&<p>{answer}</p>}
    </article>
  )
}

export default FAQ
