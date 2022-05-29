import React, {useContext, useEffect, useState} from 'react';
import './square.css'
import {Game} from "../../context/GameLogic/GameLogic";

const Square = ({row, column}) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);
    const {isGameStart} = useContext(Game);

    const mouseEnteredHandler = () => {
        if(isGameStart) {
            setIsMouseEnter(active => !active);
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