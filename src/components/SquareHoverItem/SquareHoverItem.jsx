import React from 'react';
import './square-hover-item.css';

const SquareHoverItem = ({row, col}) => {
    return (
        <div className='square-hover-item'>
            row {row} col {col}
        </div>
    );
};

export default SquareHoverItem;