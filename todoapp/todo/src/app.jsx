import { useState } from "react"

 function Todo(){
      const [todo,settodo]=useState("")
      const[input,setinput]=useState([])
    return(
        <div>
             <input type="text" value={todo} onChange={(event)=>settodo(event.target.value)} />
             <button onClick={()=>setinput([...input,todo])}>add</button>
            
                {input.map((data,index)=>
                <p key={index}>{data}</p>)}
            
        </div>
    )
 }
export default Todo