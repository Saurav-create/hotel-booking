import React from "react";
import Cardpic from "./card";
import premium from "./images/premium bed.jpg";
import regular from "./images/regular Double bed.jpg";
import single from "./images/single bed.jpg";
import Two from "./images/Two bed.jpg";



const Homepage = () => {
    return (
        <div>
            <Cardpic src={premium} details="Premium Bed for 2 person" />
            <Cardpic src={regular} details="Regular Bed for 2 person" />
            <Cardpic src={single} details="Single Bed 1 person" />
            <Cardpic src={Two} details="Two Single Bed for 2 person" />
        </div>
    )
}


export default Homepage;