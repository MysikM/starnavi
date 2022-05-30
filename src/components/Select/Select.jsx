import React, {useContext, useEffect, useRef, useState} from 'react';
import './select.css';
import {Mode} from "../../context/Modes/Modes";
import {Game} from "../../context/GameLogic/GameLogic";

const Select = () => {
    const ref = useRef();
    const [isSelectActive, setIsSelectActive] = useState(false);

    const {modes, modePick, setModePick} = useContext(Mode);
    const {isGameStart} = useContext(Game);

    const pickMode = (mode) => {
        setModePick(mode);
        setIsSelectActive(false);
    };

    const selectHandler = () => {
        if(!isGameStart) {
            setIsSelectActive(status => !status)
        }
    };

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isSelectActive && ref.current && !ref.current?.contains(e.target)) {
                setIsSelectActive(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isSelectActive]);

    return (
        <div className='app--select select' ref={ref}>
            <div className={`select--pick ${isSelectActive && 'select--pick__active'} ${modePick?.name && 'select--pick__selected'} ${isGameStart && 'select--pick__disabled'} `} onClick={selectHandler}>
                {modePick?.name || 'Pick Mode' }
                <span className={`select--triangle ${isSelectActive && 'select--triangle__active'}`}/>
            </div>
            <ul className={`select--modes ${isSelectActive && 'select--modes__open'}`}>
                {modes.map((item, i) =>
                    (<li key={i} onClick={() => pickMode(item)}>{item.name}, field: {item.field}</li>)
                )}
            </ul>
        </div>
    );
};

export default Select;