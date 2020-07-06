import React,{useState} from "react";
import "./tour.scss";
import Tours from '../Tour.js';
import {TourData} from "./tourdata";

 export default function Tour(){
  const [tour,settour] = useState(TourData);

 function removeTour (id) {
  const sortedTours = tour.filter(tours=>tours.id!== id);
  settour({
    tour:sortedTours
  });
}
   return(
     <section className="tourlist">

      {tour.map(tours=>{
       return(
         <Tours   key={tours.id} tour={tours} tours={removeTour}/>
       );
     })}

     </section>
   );
 }
