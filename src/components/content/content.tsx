import Backgr from "../backgr/backgr";
import Card from "../card/card";

export default function Content(){
    
    return <div className="bg-gray-100 w-full flex justify-between px-20">
        <Backgr/>
        <Card/>
    </div>  
}