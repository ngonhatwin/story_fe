import HeaderNav from "./navigation";
import Searching from "./search";


export default function Header(){
    
    return <div className="bg-gray-100 w-full flex justify-between px-20">
        <HeaderNav/>
        <Searching/>
    </div>  
}