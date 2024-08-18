


import sushi12 from '../sushi-12.png'
import sushi11 from '../sushi-11.png'
import sushi10 from '../sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({
    duration: 1000,
    offset: 100,
});



const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];