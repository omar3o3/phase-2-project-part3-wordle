import React, { useState, useEffect } from 'react';
import useGameMode from './useGameMode';
import Grid from './Grid'

function EasyMode({ filteredSolution }) {

  const { handleKeyUp, currentGuess, oldGuesses, turnValue, gameLost, gameWon } = useGameMode({ filteredSolution })

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [currentGuess, handleKeyUp])

  return (
    <div className='my-5'>
      <div className='text-center display-4 mb-2'>
        {gameWon ? (`You won! It took you ${turnValue === 1 ? '1 try.' : `${turnValue} tries.`}`) : null}
      </div>
      <div className='text-center display-4 mb-2'>
      {gameLost ? `Better luck next time, the solution is ${filteredSolution}` : null}
      </div>
      <Grid currentGuess={currentGuess} oldGuesses={oldGuesses} turnValue={turnValue} />
    </div>
  )
}

export default EasyMode