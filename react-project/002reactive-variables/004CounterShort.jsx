import React, {useState} from 'react';

export function Counter(props) {
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            Count is {counter}
            <button onClick={()=>setCounter(count => count + 1)}>+</button>
            <button onClick={()=>setCounter(count => count - 1)}>-</button>
        </div>
    );
}
