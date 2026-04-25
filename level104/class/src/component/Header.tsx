
interface Headerprops{
    setCount:React.Dispatch<React.SetStateAction<number>>;
   
}


export default function Header(props: Headerprops){
    function handleclick(){
    props.setCount((prv) => prv + 1)
}
    return(
        <header>
            <nav>
            <h1>Header</h1>
          
            
            </nav>
            <button onClickCapture={handleclick}>click</button>
        </header>
    )
}