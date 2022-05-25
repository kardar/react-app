import React from "react";
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import '../style/catogries.css'
import prod1 from '../resources/cat-1.jpg';
import prod2 from '../resources/cat-2.jpg';
import prod3 from '../resources/cat-3.jpg';
import prod4 from '../resources/cat-4.jpg';

const breakPoints = [ 
  {width: 1, itemsToShow : 4},
 
]

const Catogries = () => {
  return (
    <div className="catogries-container">
       <Carousel breakPoints={breakPoints}>
         <Item><img src={prod1} ></img></Item>
         <Item><img src={prod2} ></img></Item>
         <Item><img src={prod3} ></img></Item>
         <Item><img src={prod4} ></img></Item>
         <Item><img src={prod1} ></img></Item>
         <Item><img src={prod2} ></img></Item>
         <Item><img src={prod3} ></img></Item>
         <Item><img src={prod4} ></img></Item>
       </Carousel>
    </div>
  );
};

export default Catogries;
