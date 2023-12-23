import {SiOpenaigym} from 'react-icons/si'
import { GiCrownedSkull } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { FaDumbbell, FaRunning, FaWeight } from 'react-icons/fa';



import Trainer1 from './images/trainer1.jpg';
import Trainer2 from './images/trainer2.jpg';
import Trainer3 from './images/trainer3.jpg';
import Trainer4 from './images/trainer4.jpg';
import Trainer5 from './images/trainer5.jpg';
import Trainer6 from './images/trainer6.jpg';

import avatar1 from './images/avatar1.jpg';
import avatar2 from './images/avatar2.jpg';
import avatar3 from './images/avatar3.jpg';
import avatar4 from './images/avatar4.jpg';
import avatar5 from './images/avatar5.jpg';





export const links = [
    {
        id: 1,
        name: "Home",
        path: '/'
    },
    {
        id: 2,
        name: "About",
        path: '/about'
    },
    {
        id: 3,
        name: "Gallery",
        path: '/gallery'
    },
    {
        id: 4,
        name: "Plans",
        path: '/plans'
    },
    {
        id: 5,
        name: "Trainers",
        path: '/trainers'
    },
    {
        id: 6,
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: FaDumbbell ,
        title: "Weight Loss Training",
        info: "A comprehensive program designed for effective weight loss, targeting fat burning and muscle toning.",
        path: "/programs/weight-loss-training"
      },
      {
        id: 2,
        icon: CgGym ,
        title: "Strength Building",
        info: "Dedicated workouts focusing on building muscle strength and endurance, enhancing overall body strength.",
        path: "/programs/strength-building"
      },
      {
        id: 3,
        icon: FaWeight ,
        title: "Cardio Conditioning",
        info: "Intensive cardio sessions to improve cardiovascular health, stamina, and overall fitness levels.",
        path: "/programs/cardio-conditioning"
      },
      {
        id: 4,
        icon: FaRunning ,
        title: "Flexibility Training",
        info: "Specialized training to enhance flexibility, agility, and prevent injury through stretching and mobility exercises.",
        path: "/programs/flexibility-training"
      }
]








export const values = [
    {
        id: 1,
        icon: SiOpenaigym,
        title: "Efficient Workouts",
        desc: "Time-efficient exercises designed to fit into your busy schedule.",
    },
    {
        id: 2,
        icon: SiOpenaigym,
        title: "Personalized Training",
        desc: "Customized workout plans tailored to your fitness goals and needs.",    },
    {
        id: 3,
        icon: SiOpenaigym,
        title: "Motivation & Support",
        desc: "Stay motivated with our supportive community and inspiring trainers.",
    },
    {
        id: 4,
        icon: SiOpenaigym,
        title: "Nutrition Guidance",
        desc: "Expert advice on nutrition and healthy lifestyle choices for overall well-being.",
    },
]








export const faqs = [
    {
      id: 1,
      question: "What are some recommended exercise frequencies for beginners?",
      answer: "For beginners, it's advisable to start with 2-3 sessions per week, gradually increasing as your fitness improves. Consistency matters more than intensity initially."
    },
    {
      id: 2,
      question: "When is the ideal time to workout for maximum effectiveness?",
      answer: "The best time varies based on personal preferences and schedule. Some prefer mornings for an energy boost, while others find evenings more suitable. The key is to find a time that suits your routine and allows you to be consistent."
    },
    {
      id: 3,
      question: "What's the recommended duration for a workout session?",
      answer: "Aim for 30-60 minutes per session, focusing on quality over quantity. Adjust the duration based on your fitness level, goals, and workout intensity."
    },
    {
      id: 4,
      question: "Is a warm-up necessary before exercising?",
      answer: "Yes, warming up is crucial. It prepares your body by increasing blood flow, loosening muscles, and reducing the risk of injury. Spend 5-10 minutes on dynamic movements or light cardio before your main workout."
    },
    {
      id: 5,
      question: "What's the benefit of combining strength training and cardio?",
      answer: "Both types offer unique benefits. Strength training builds muscles and boosts metabolism, while cardio improves cardiovascular health and endurance. A balanced routine incorporating both yields comprehensive fitness benefits."
    },
    {
      id: 6,
      question: "Should beginners include weight lifting in their workout regimen?",
      answer: "Weight lifting can be beneficial for beginners when performed with proper form and guidance. It enhances strength, muscle tone, and overall fitness. Start with lighter weights and focus on correct techniques."
    }
  ];
  







  export const testimonials = [
    {
      id: 1,
      name: "John Doe",
      quote: "I've experienced an incredible transformation in my fitness journey since joining this gym. The trainers are top-notch, and the atmosphere is motivating. Highly recommended!",
      job: "Marketing Consultant",
      avatar: avatar1
    },
    {
      id: 2,
      name: "Jane Smith",
      quote: "The gym has been a game-changer for me. The variety of classes and personalized training have helped me achieve my fitness goals. The supportive community here is amazing!",
      job: "Graphic Designer",
      avatar: avatar2
    },
    {
      id: 3,
      name: "Michael Johnson",
      quote: "Exceptional facilities and a friendly team make this gym stand out. The trainers are knowledgeable and genuinely care about your progress. A fantastic place for fitness enthusiasts!",
      job: "Teacher",
      avatar: avatar3
    },
    {
      id: 4,
      name: "Sarah Thompson",
      quote: "I can't say enough about this gym! The atmosphere is welcoming, and the trainers go above and beyond to keep workouts exciting and effective. I'm delighted with my results!",
      job: "Writer",
      avatar: avatar4
    },
    {
      id: 5,
      name: "David Rodriguez",
      quote: "Joining this gym has been one of the best decisions I've made. The variety of classes and supportive staff make every workout enjoyable. I've never felt better!",
      job: "Financial Analyst",
      avatar: avatar5
    }
  ];





export const plans = [
    {
        id: 1,
        name: 'Starter Package',
        desc: 'This package is designed for beginners seeking consistent guidance and support.',
        price: 29.99,
        features: [
            { feature: 'Unlimited Gym Access', available: true },
            { feature: 'Personal Trainer Consultation', available: true },
            { feature: 'Customized Workout Plans', available: true },
            { feature: 'Nutritional Guidance', available: true },
            { feature: 'Group Fitness Classes', available: true },
            { feature: 'Advanced Classes Access', available: false },
            { feature: 'Fitness Assessment', available: false },
            { feature: 'Exclusive Gym Events', available: false },
            { feature: 'Fitness Merchandise Discount', available: false },
            { feature: 'Online Workout Resources', available: false },
            { feature: 'Monthly Progress Tracking', available: false },
            { feature: '24/7 Customer Support', available: false },
            { feature: 'Access to Sports Facilities', available: false },
        ]
    },
    {
        id: 2,
        name: 'Intermediate Package',
        desc: 'This package is ideal for beginners with some fitness knowledge and experience.',
        price: 49.99,
        features: [
            { feature: 'All Starter Package Features', available: true },
            { feature: 'Advanced Fitness Programs', available: true },
            { feature: 'Specialized Training Sessions', available: true },
            { feature: 'In-depth Nutritional Planning', available: true },
            { feature: 'Advanced Group Classes', available: true },
            { feature: 'Enhanced Fitness Assessment', available: true },
            { feature: 'Invitations to Exclusive Events', available: true },
            { feature: 'Merchandise Discounts', available: true },
            { feature: 'Online Community Access', available: false },
            { feature: 'Personalized Progress Tracking', available: false },
            { feature: '24/7 Customer Support', available: false },
            { feature: 'Additional Sports Facilities', available: false },
            { feature: 'Expert Personal Assistance', available: false },
        ]
    },
    {
        id: 3,
        name: 'Advanced Package',
        desc: 'This package is tailored for busy individuals requiring premium at-home fitness services.',
        price: 89.99,
        features: [
            { feature: 'All Intermediate Package Features', available: true },
            { feature: 'Exclusive Personal Trainer', available: true },
            { feature: 'In-home Fitness Sessions', available: true },
            { feature: 'Customized Nutritional Planning', available: true },
            { feature: 'Virtual and On-site Group Classes', available: true },
            { feature: 'Enhanced Fitness Monitoring', available: true },
            { feature: 'Priority Access to Events', available: true },
            { feature: 'Premium Merchandise Discounts', available: true },
            { feature: 'Extended Online Community Access', available: true },
            { feature: 'Advanced Progress Tracking', available: true },
            { feature: '24/7 Elite Customer Support', available: true },
            { feature: 'Full Access to Sports Facilities', available: true },
            { feature: 'Personalized Fitness Concierge', available: true },
        ]
    }
];













export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]