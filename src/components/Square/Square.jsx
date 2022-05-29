import React, { useState} from 'react';
import './square.css'

const Square = ({row, column}) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const mouseEnteredHandler = () => {
            setIsMouseEnter(active => !active);
    };

    return (
        <div className={`board--square ${isMouseEnter && 'board--square__active'}`} onMouseEnter={mouseEnteredHandler} />
    );
};

export default Square;