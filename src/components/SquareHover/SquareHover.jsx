import React, {useContext} from 'react';
import './square-hover.css';
import SquareHoverItem from "../SquareHoverItem/SquareHoverItem";
import {Squares} from "../../context/HoverSquares/HoverSquares";

const SquareHover = () => {
    const {hoverSquaresPosition} = useContext(Squares);
    return (
        <>
            <h2 className='hover-squares--title'>Hover Squares</h2>
            <ul className='hover-squares--list'>
                {hoverSquaresPosition.map(el => <li key={el.id}><SquareHoverItem row={el.row} col={el.column} /></li>)}
            </ul>
        </>
    );
};

export default SquareHover;