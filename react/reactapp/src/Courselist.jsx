import useFetch from './usefetch.jsx';
import Course from './course.jsx';
import Counter from './counter.jsx';
import {createContext} from 'react';
export const datacontext=createContext();


function Courselist() {
   
   const[courses,error,setcourse]=useFetch('http://localhost:3000/courses');
      function handledelete(id){
        const newcourses=courses.filter((course)=>course.id!=id);
        setcourse(newcourses);
      }
      
   //courses.sort((a,b)=>b.price-a.price);
    const data="datadata";
if(!courses){
    return <>
    {!error&&<p>loading...</p>}
    {error&&<p>{error}</p>}</>
}
 const cor=courses.filter((course)=>course.price>=200);
    const courseitems=cor.map((course)=>
    <Course key={course.id} name={course.name} price={course.price} image={course.image} deletecourse={handledelete} id={course.id} />
    );
    return (
         <div>
            <>
          <div> {courseitems}</div>
          < datacontext.Provider value={data}>
             <Counter/>
         </datacontext.Provider>
           </>        
         </div>  
    );
}
export default Courselist;