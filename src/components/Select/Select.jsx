import React, {useContext, useState} from 'react';
import './select.css';
import {Mode} from "../../context/Modes/Modes";

const Select = () => {
    const [isSelectActive, setIsSelectActive] = useState(false);
    const {modes, modePick, setModePick} = useContext(Mode);

    const pickMode = (mode) => {
        setModePick(mode);
        setIsSelectActive(false);
    };

    return (
        <div className='app--select select'>
            <div className={`select--pick ${isSelectActive && 'select--pick__active'} ${modePick?.name && 'select--pick__selected'}`} onClick={() => setIsSelectActive(status => !status)}>
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