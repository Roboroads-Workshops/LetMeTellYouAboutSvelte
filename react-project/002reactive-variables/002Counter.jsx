import React, {useState} from 'react';

export function Counter(props) {
    const [counter, setCounter] = useState(0);
    
    return (
        <>
            Count is {counter}
        </>
    );
}
