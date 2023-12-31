import { useState } from 'react';

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const sumar = () => {
            setCounter(counter + 1);
    }

    return(
        <div className="mt-2">
            <h3>Counter: useState</h3>
            <span>Valor: { counter } </span>
            <br/>
            <button className='btn btn-outline-primary mt-3' onClick={ sumar }>
                +1
            </button>
        </div>
    );
}