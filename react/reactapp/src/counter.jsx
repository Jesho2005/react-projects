import { useState,useContext, useRef } from "react";
import {datacontext} from './Courselist.jsx';
import { Link } from "react-router-dom";

export default function Counter(){
    const data=useContext(datacontext);
    const[count,setcount]=useState(0);
    const ref=useRef(0)
    function inc(){
        setcount(count+1);
        ref.current+=1;
      }
      
    return(
        <div>
            <Link to="/">home</Link>
            
             <button onClick={()=>inc()}>click</button>
             <button onClick={()=>setcount(ref.current)}>update</button>
            <p>{data}</p>
        </div>
    )
}
//npx json-server --watch data/dummydata.json --port 3000 --static ./data