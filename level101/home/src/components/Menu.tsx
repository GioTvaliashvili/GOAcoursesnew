import MenuItem from "./MenuItem";
export default function Menu(props:any){
    return(
        <div>
        <MenuItem item="xinkali"></MenuItem>
        <MenuItem price={2.20}></MenuItem>
        <MenuItem id={286}></MenuItem>
        <MenuItem discount={1}></MenuItem>
        <MenuItem color="white"></MenuItem>
        <MenuItem ingredients="dom,meat,salt,pepper,dzira and vegetables"></MenuItem>
        </div>
    )
}