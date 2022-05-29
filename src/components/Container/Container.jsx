import React from 'react';
import './container.css';

import SquareHover from "../SquareHover/SquareHover";
import Select from "../Select/Select";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";

const Container = () => {
    return (
        <div className='container'>
            <div className="app">
                <div className="app--mode">
                    <Select />
                    <Button />
                </div>
                <div className="app--game-board">
                    <Grid />
                </div>
            </div>
            <div className='app--hover-squares'>
                <SquareHover />
            </div>
        </div>
    );
};

export default Container;