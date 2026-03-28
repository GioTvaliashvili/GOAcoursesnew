import Course from "./Course";
export default function Courses(props:any){
    return(
        <div>
            <Course title={props.title}></Course>
            <Course mentor={props.mentor}></Course>
            <Course price={props.price}></Course>
            <Course duration={props.duration}></Course>
        </div>
    )
}