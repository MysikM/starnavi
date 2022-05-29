import React from 'react';
import './row.css';
import Square from "../Square/Square";
import {ROW__ELEMENT} from "../../data/variables";

const Row = ({row}) => {
    const squareAmount = new Array(ROW__ELEMENT).fill(0).map((item, i) => i + 1);

    return (
        <div className='board--row'>
            {squareAmount.map((el) => <Square key={el} row={row} column={el} />) }
        </div>
    );
};

export default Row;