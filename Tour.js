import React,{useState} from "react";
import "./Tour.scss";
export default function Tours(props){
  const[state,setstate]=useState(false);
  function handleinfo(){
    setstate({
      state:!state
    });
  }

  const{id,city,img,name,info}= props.tour;
 function remove(){
   props.tours(props.id);
 }
 return <article className="tour">
<div className="img-container">
<img   src={img}/>
<span className="close-btn" onClick={()=>remove(id)}>
<i className="fas fa-window-close"/>
</span>
</div>

<div className="tour-info">
  <h3>{city}</h3>
  <h4>{name}</h4>
  <h5>
    info{''}
    <span onClick={handleinfo}>
       <i className="fas fa-caret-square-down"/>
    </span>
  </h5>
  {state && <p> {info} </p> }

</div>
</article>
}
