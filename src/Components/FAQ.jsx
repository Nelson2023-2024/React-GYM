
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
<FaMinus />

import { useState } from "react";



function FAQ({question, answer}) {

    const [isAnswerShowing,  setIsAnswerShowing] = useState(false)
  return (
    <article onClick={() => setIsAnswerShowing(previsShowing => !previsShowing)} className="faq">
        <div >
            <h4>{question}</h4>
            <button className="faq__icon" style={{cursor:'pointer'}}>
            { isAnswerShowing ? <FaMinus/> : <FaPlus />  }
            </button>
        </div>
        {isAnswerShowing &&<p>{answer}</p>}
    </article>
  )
}

export default FAQ
