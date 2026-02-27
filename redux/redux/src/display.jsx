import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { deleteUser } from "./app/slice";
export default function Display(){
   const dispatch=useDispatch()
    const navigate=useNavigate();
    const users=useSelector((state)=>state.usersinfo.users);
    console.log(users)
    const deleteuser=(index)=>{    
    dispatch(deleteUser(index))
    }
   return(
    <div>
       <div>
        <button onClick={()=>navigate('/')}>Form</button>
       </div>
       <div>
         <h1>users data</h1>
         {users?.map((users,index)=>{
            return(
               <div key={index}>
                  <p>{users.name}</p>
                <p>{users.age}</p>
                <p>{users.email}</p>
                  <p>{users.contact}</p>
                  <button onClick={()=>deleteuser(index)}>delete</button>
               </div>
            )
         })}
       </div>
    </div>
   )
}