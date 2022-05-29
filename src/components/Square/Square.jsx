import React, {useContext, useEffect, useState} from 'react';
import './square.css'
import {Game} from "../../context/GameLogic/GameLogic";
import {Squares} from "../../context/HoverSquares/HoverSquares";

const Square = ({row, column}) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const {isGameStart} = useContext(Game);
    const {hoverSquaresPosition, setHoverSquaresPosition} = useContext(Squares);

    const addToHoverSquares = () => setHoverSquaresPosition([...hoverSquaresPosition, {row, column, id: new Date().getTime()}]);
    const removeFromHoverSquares = () => setHoverSquaresPosition(hoverSquaresPosition.filter(el => (el.row !== row || el.column !== column)));

    const mouseEnteredHandler = () => {
        if(isGameStart) {
            setIsMouseEnter(active => !active);
            isMouseEnter ? removeFromHoverSquares() : addToHoverSquares();
        }
    };

    useEffect(()=> {
        setIsMouseEnter(false);
    }, [isGameStart]);

    return (
        <div className={`board--square ${isMouseEnter && 'board--square__active'}`} onMouseEnter={mouseEnteredHandler} />
    );
};

export default Square;