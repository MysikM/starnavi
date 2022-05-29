import React from 'react';
import './square-hover.css';
import SquareHoverItem from "../SquareHoverItem/SquareHoverItem";

const SquareHover = () => {
    return (
        <>
            <h2 className='hover-squares--title'>Hover Squares</h2>
            <ul className='hover-squares--list'>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
                <li><SquareHoverItem row={1} col={1} /></li>
            </ul>
        </>
    );
};

export default SquareHover;