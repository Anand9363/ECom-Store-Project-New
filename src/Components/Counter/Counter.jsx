import { useEffect, useState } from "react";
import DemoImages from "../DemoImages/DemoImages";

const Counter = () => {
    let [value, setvalue] = useState(0);

    const HandleIncreamentValue=()=>{
        setvalue(value + 1);
    }

    const HandleDecrementValue=()=>{
        setvalue(value - 1);
    }


    return (
        <>
            <p>Counter</p>
            <p>{value}</p>
        
            <DemoImages onInc={HandleIncreamentValue} onDec={HandleDecrementValue}/>
        </>
    )
}

export default Counter;