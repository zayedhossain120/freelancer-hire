import React, { useState } from 'react';
import './Calculate.css'
const Calculate = (props) => {
    const { calculate } = props;
    console.log(calculate);

    const [number, setNumber] = useState();
    const [showResult, setShowResult] = useState();
    const fixedValue = calculate;

    const handleInputChange = (event) => {
        setNumber(event.target.value);
    };

    const calculateResult = () => {
        const result = Number(number) * fixedValue;
        setShowResult(result);
    };
    return (
        <div className='calculate-main'>
            <h2>Hourly: {calculate}</h2>
            <input type="number" value={number} onChange={handleInputChange} />

            <button onClick={calculateResult}>Multiply</button>
            <p>Result: {showResult}</p>
        </div>
    );
};

export default Calculate;