import {useState} from "react";
import './component.scss';
export default function Component ():any {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span className='counter'>{count}</span>
            <button onClick={()=>setCount(count+1)}>INCREMENT</button>
        </div>
    )
}