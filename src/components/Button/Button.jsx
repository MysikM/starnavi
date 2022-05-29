import React, {useContext} from 'react';
import './button.css';
import {Mode} from "../../context/Modes/Modes";

const Button = () => {
    const {modePick} = useContext(Mode);

    return (
        <button
            type='button'
            disabled={!modePick?.name}
            className='app--btn'
            onClick={() => { console.log('click') }}
        >
           Start
        </button>
    );
};

export default Button;