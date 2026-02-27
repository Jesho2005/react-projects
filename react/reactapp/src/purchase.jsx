import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Purchase(){
    const[course,setcourse]=useState();
    const {id}=useParams();
  useEffect(()=>{
    fetch('http://localhost:3000/courses/'+id)
    .then(response =>{ return response.json()})
    .catch(()=>{
      throw new Error("unable to fetch data");
    })
    .then(data=>setcourse(data))
    .catch((error)=>{
      console.log(error.message);
      
      
    });
},[]);
    
    return(
        <div>
            <h1>purchase page:{id}</h1>
            {course&&
            <div>
            <img src={course.image} alt="" />
          {course.name}
            </div>}


        </div>
    )
}