import React from 'react'
import Tetris from 'react-tetris-overlay';
import './Game.css';
import Arcade from './Arcade';
import Pacman from 'pacman-react';
import Question from './Question';
export const PacmanGame = () => (
    <div className="Game" >
        <Arcade>
            <Pacman /> 
        </Arcade>
      
    </div>
);

export const QuizzGame = () => (
    <div className="Game" >
        <Arcade>
            <Question /> 
        </Arcade>
      
    </div>
)