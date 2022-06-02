import React, { useState, useEffect } from 'react';
import useGameMode from './useGameMode';
import Grid from './Grid'

function EasyMode({ filteredSolution }) {

  const { handleKeyUp, currentGuess, oldGuesses, turnValue, gameLost, gameWon } = useGameMode({ filteredSolution })

  console.log(filteredSolution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [currentGuess, handleKeyUp])

  return (
    <div>
      <div className='justify-text-center display-2'>
        {gameWon ? `Good job, you won` : null}
      </div>
      <div className='justify-content-center display-2'></div>
        {gameLost ? `Better luck next time, the solution is ${filteredSolution}` : null}
      <div></div>
      <Grid currentGuess={currentGuess} oldGuesses={oldGuesses} turnValue={turnValue} />
    </div>
  )
}

export default EasyMode