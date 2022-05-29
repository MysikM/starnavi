import React, {useContext} from 'react';
import './button.css';
import {Mode} from "../../context/Modes/Modes";
import {Game} from "../../context/GameLogic/GameLogic";

const Button = () => {
    const {modePick} = useContext(Mode);
    const {isGameStart ,setIsGameStart} = useContext(Game);

    return (
        <button
            type='button'
            disabled={!modePick?.name}
            className={`app--btn ${isGameStart && 'app--btn__active'}`}
            onClick={() => setIsGameStart(status => !status)}
        >
            {isGameStart ? 'Reset' : 'Start'}
        </button>
    );
};

export default Button;