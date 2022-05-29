import React, {createContext, useState} from 'react';

export const Game = createContext(null);

const GameLogic = ({children}) => {
    const [isGameStart, setIsGameStart] = useState(false);

    return (
        <Game.Provider value={{isGameStart, setIsGameStart}}>
            {children}
        </Game.Provider>
    );
};

export default GameLogic;