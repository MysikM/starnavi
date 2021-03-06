import React, {createContext, useEffect, useState} from 'react';
import {URL} from "../../data/variables";

export const Mode = createContext(null);

const Modes = ({children}) => {

    const [modes, setModes] = useState([]);
    const [modePick, setModePick] = useState({});

    const loadMode = async () => {
        try{
            const response = await fetch(URL);
            setModes(await response.json());
        } catch (e) {
            alert(`${e.message}, we try to restart the page for the correct work this app`);
            window.location.reload();
        }
    };

    useEffect(()=>{
        loadMode();
    },[]);


    return (
        <Mode.Provider value={{modes, modePick, setModePick}}>
            {children}
        </Mode.Provider>
    );
};

export default Modes;