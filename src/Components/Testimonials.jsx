//useState hook
import { useState } from "react";

//data.js
import { testimonials } from "../data"

//reusable components
import Card from "../UI/Card"
import SectionHead from "./SectionHead"

//icons
import {  FaUsers  } from 'react-icons/fa';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

// Use these icons for left and right arrows in your testimonial section.



function Testimonials() {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]

    const prevTestimonialHandler = () => {
        setIndex(prevIndex => prevIndex - 1)

        if(index <= 0 ){
            setIndex(testimonials.length - 1)
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prevIndex => prevIndex + 1)

        if(index >= testimonials.length - 1 ){
            setIndex(0)
        }

    }
  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead className={'testimonials__head'} icon={< FaUsers/>} title={'Testimonials'}/>
            <Card className="testimonials">
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testimonial__quote">
                    {`"${quote}"`}
                </p>
                <h5>{name}</h5>
                <small className="testimonial__title">{job}</small>
            </Card>

            <div className="testimonials__btn-container">
                <button onClick={prevTestimonialHandler} className="testimonials__btn">
                    <FaArrowAltCircleLeft/>
                </button>
                <button onClick={nextTestimonialHandler} className="testimonials__btn">
                    <FaArrowAltCircleRight/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
