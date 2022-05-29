import React, {createContext, useContext, useEffect, useState} from 'react';
import {Game} from "../GameLogic/GameLogic";

export const Squares = createContext(null);

const HoverSquares = ({children}) => {
    const [hoverSquaresPosition, setHoverSquaresPosition] = useState([]);
    const {isGameStart} = useContext(Game);

    useEffect(()=> {
        setHoverSquaresPosition([]);
    }, [isGameStart]);

    return (
        <Squares.Provider value={{hoverSquaresPosition, setHoverSquaresPosition}}>
            {children}
        </Squares.Provider>
    );
};

export default HoverSquares;