import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function Course(props) {
  const navigate=useNavigate();
    const[purchased,setpurchased]=useState("get it now");
  const [dis,setdiscount]=useState(props.price);
    return (
        <div className='card'>
        <img src={props.image} alt="not found" />
        <h3>{props.name}</h3>
        <p>{dis}</p>
        <button onClick={()=>buy(20)}>buy now</button>
        <button onClick={()=>props.deletecourse(props.id)}>delete</button>
        <p>{purchased }</p>
       <button onClick={()=>navigate('/purchase/'+props.id)}>purchase</button>
      </div>
        );
    function buy(discount){
      console.log("purchased ",props.name);
      console.log("discount ",discount);
      setpurchased("already purchased");
      setdiscount(dis-discount)
      console.log(purchased);
    }
    }


export default Course;
