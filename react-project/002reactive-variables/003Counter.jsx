import React, {useState} from 'react';

export function Counter(props) {
    const [counter, setCounter] = useState(0);
    
    function increment()  {
      setCounter(count => count + 1);
    }
    
    function decrement()  {
      setCounter(count => count - 1);
    }
    
    return (
        <div>
            Count is {counter}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}
