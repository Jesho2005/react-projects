import App from "./App";
import Image from "./assets/react.svg";
function Course(){
    const courses=[{
        name:"html course",
        price:"500",
        image:Image
    },{
        name:"css course",
        price:"700",
        image:Image
    },{
        name:"js course",
        price:"1000",
        image:Image
    }];

     const courseList=courses.map((course,index)=><App key={index} name={course.name} price={course.price} image={course.image  }/>);

    return (
        <div>

         {courseList}
        </div>
    )
}
export default Course;