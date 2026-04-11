import HeroSection from "./HeroSection";

interface Mainprops{
 count:number;
}


export default function Main(props:Mainprops){
    return(
       <main>
        <h2>Main</h2>
        <HeroSection count=(props.count)>
       </main>
    );
}