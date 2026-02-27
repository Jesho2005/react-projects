import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setUsers } from "./app/slice"
export default function Form(){
  const navigate=useNavigate()
  const [forminput,setinput]=useState({
    name:"",
    age:"",
    email:"",
    contact:"",
  })
  const handle=(event)=>{
    const {name,value}=event.target
    setinput((currentinput)=>{ 
      return{
      ...currentinput,
      [name]:value
    }
    })
  }
  console.log(forminput)
  
  const dispatch=useDispatch()
  const adduser=(event)=>{
  event.preventDefault();
  dispatch(setUsers(forminput))
  }
   return(
    <div>
      <div>
        <button onClick={()=>navigate('/disp')}>display</button> 
      </div>
      <div>
        <form >
           <label>name</label> <br/>
           <input name="name" type="text" value={forminput.name} onChange={handle}/><br/>
            <label>age</label> <br/>
           <input name="age" type="number" value={forminput.age} onChange={handle}/><br/>
            <label>email</label> <br/>
           <input name="email" type="email" value={forminput.email} onChange={handle}/><br/>
            <label>contact</label> <br/>
           <input name="contact" type="number" value={forminput.contact} onChange={handle}/> <br/><br/>

           <button onClick={adduser}>add</button>
        </form>
        
      </div>
    </div>
   )
}