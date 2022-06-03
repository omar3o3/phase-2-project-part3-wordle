import React, { useState, useEffect } from 'react';
import useGameMode from './useGameMode';
import Grid from './Grid'
import Button from 'react-bootstrap/Button'

function EasyMode({ filteredSolution }) {

  const { handleKeyUp, currentGuess, oldGuesses, turnValue, gameLost, gameWon } = useGameMode({ filteredSolution })

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [currentGuess, handleKeyUp])

  const handleHint = () =>{
    
  }

  return (
    <div className='my-5 justify-content-center'>
      <div className='text-center display-4 mb-2'>
        {gameWon ? (`You won! It took you ${turnValue === 1 ? '1 try.' : `${turnValue} tries.`}`) : null}
      </div>
      <div className='text-center display-4 mb-2'>
        {gameLost ? `Better luck next time, the solution is ${filteredSolution}` : null}
      </div>
      <div className='text-center my-2'>
        <Button onClick={handleHint} variant="outline-dark">Need a hint?</Button>
      </div>
      <Grid currentGuess={currentGuess} oldGuesses={oldGuesses} turnValue={turnValue} />
    </div>
  )
}

export default EasyMode