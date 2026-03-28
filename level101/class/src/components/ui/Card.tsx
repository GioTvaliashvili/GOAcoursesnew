export default function Card(props:any){
    return(
       <div>
        <h1>{props.age}</h1>
        <h2>{props.name}</h2>
        <h3>{props.img}</h3>
        
       </div>
    )
}