export default function MenuItem(props:any){
    return(
        <div>
            <h1>{props.item}</h1>
            <h1>{props.price}</h1>
            <h1>{props.id}</h1>
            <h1>{props.discount}</h1>
        </div>
    )
}