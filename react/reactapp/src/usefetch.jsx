import { useState, useEffect } from "react";
const useFetch=(url)=>{
  
const [courses,setcourse] = useState(null);
    const[error,seterror]=useState(null);
    
    useEffect(() => {
      const controller=new AbortController();
      const signal=controller.signal;  
      setTimeout(()=>{
        
     
    fetch(url,{signal})
    .then(response =>{ return response.json()})
    .catch(()=>{
      throw new Error("unable to fetch data");
    })
    .then(data=>setcourse(data))
    .catch((error)=>{
      console.log(error.message);
      seterror(error.message);
      
    });
  
  },1000);
  return (()=>{
    console.log("cleanup function");
    controller.abort();
  })
    }, [])
     
    return [courses,error,setcourse];
}
export default useFetch;
