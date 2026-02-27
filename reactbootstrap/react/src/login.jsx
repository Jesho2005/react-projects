import { useState } from "react"
export default function Login() {
  const[pwd1,setpwd1]=useState();
  const[pwd2,setpwd2]=useState();
   const[check,setcheck]=useState(false);

  function pwd1change(event){
    setpwd1(event.target.value)
    
  }
  function pwd2change(event){
    setpwd2(event.target.value)
  }
  function handlecheck(){
     event.preventDefault(); 
    if(pwd1!=pwd2){
         setcheck(true);
    }
    else{
      setcheck(false);
  alert("logged in successfully");
    }
  }

  return (
      <div>
        <form style={{width: "30%", margin: "auto", marginTop: "100px"}} onSubmit={handlecheck}>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" />
    
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" value={pwd1} onChange={pwd1change} />
  </div>
  <div className="mb-3">
    <label className="form-label">Re-enter Password</label>
    <input type="password" className="form-control" value={pwd2} onChange={pwd2change}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" />
    <label className="form-check-label" >Check me out</label>
  </div>
  <p>{check?"password doesn't match":""}</p>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
      </div> 
    )
}