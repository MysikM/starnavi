import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Modes from "./context/Modes/Modes";
import GameLogic from "./context/GameLogic/GameLogic";
import HoverSquares from "./context/HoverSquares/HoverSquares";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameLogic>
        <HoverSquares>
            <Modes>
                <App />
            </Modes>
        </HoverSquares>
    </GameLogic>
  </React.StrictMode>
);
