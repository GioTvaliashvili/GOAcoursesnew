import type { ReactNode } from "react";
interface Footerprops{
    lomi:string;
    children:ReactNode;
}


export default function Footer(props:Footerprops){
    return(
        <header>
            <nav>
            <h1>Footer</h1>
            <p>{props.lomi}</p>
            <h3>{props.children}</h3>
            </nav>
        </header>
    )
}