import type { ReactNode } from "react"

const Size={
    small:"10px",
    medium:"20px",
    large:"30px"
}
const Color={
    red:"red",
    blue:"blue",
    green:"green",
    newcolor:"#27CCF5"
}

type sizeTypes = keyof typeof Size;
type colorTypes = keyof typeof Color;

interface ButtonProps{
    color: colorTypes;
    children?:ReactNode;
    size: sizeTypes
   
}

console.log(Object.keys(Size))


export default function Button(props:ButtonProps){
    console.log(props)
    return (
    
    <button style={{fontSize :Size[props.size], background:Color[props.color]}}>{props.children}</button>



)
}