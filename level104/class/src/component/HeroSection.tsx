interface HeroSectionProps{
    count:number;
}
export default function HeroSection(props:HeroSectionProps){
    return(
        <section>
            <h2>hero section</h2>
            <p>header-button clicked {props.count}times</p>
        </section>
    )
}