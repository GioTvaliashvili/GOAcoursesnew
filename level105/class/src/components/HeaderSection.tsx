import { useContext } from "react"
import { Context} from "../App"
 
export default function HeaderSection(){
    
    const {count} = useContext(Context);
    return <div className="header">Header {count}</div>
    
    return
    
    
}
