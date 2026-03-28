export default function Profile(props:any){
    return(
        <div>
        <h1>{props.username}</h1>
        <h1>{props.password}</h1>
        <h1>{props.email}</h1>
        <h1>{props.age}</h1>
        <img src={props.profilePic} alt="" />

        </div>
    )
}