import { useState } from "react";
function Counter(){
    const [count, setcount] = useState(0);
    const handleAdd = ()=> {
        setcount(count +1);

    };
    const handleReduce = ()=> {
        setcount(count -1);
    };
    const handleReset = ()=> {
        setcount(0);
    };
    return(
        <div>
            <h1>count: {count} </h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce} disabled={count<1}>Reduce</button>
            <button onClick={handleReset} >Reset</button>
        </div>
    );

    

}
export default Counter;



