import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Mode} from "../../context/Modes/Modes";
import Row from "../Row/Row";
import {ROW__ELEMENT} from "../../data/variables";

const Grid = () => {
    const {modePick} = useContext(Mode);
    const [gridSize, setGridSize] = useState(20);
    const rowCount = useMemo(()=>{
        return new Array(Math.round(+gridSize/ROW__ELEMENT)).fill(0).map((item, i) => i + 1);
    }, [gridSize]);

    useEffect(()=>{
        if(modePick?.field) {
            setGridSize(modePick?.field);
        }
    }, [modePick]);

    return (
        <>
            {
                rowCount?.map((el) => (<Row key={el} row={el} />))
            }
        </>
    );
};

export default Grid;