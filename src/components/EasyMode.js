import React, { useState, useEffect } from 'react';
import useGameMode from './useGameMode';
import Grid from './Grid'

function EasyMode({filteredSolution}) {

  const {handleKeyUp , currentGuess , oldGuesses , turnValue , gameLost , gameWon} = useGameMode({filteredSolution})

  console.log(filteredSolution);

  useEffect(()=>{
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  },[currentGuess , handleKeyUp])

  return (
    <div>
      <Grid  currentGuess={currentGuess} oldGuesses={oldGuesses} turnValue={turnValue}/>
      
      {gameWon ? `Good job, you won in ${turnValue} tries` : null}
      {gameLost ? `Better luck next time, the solution is ${filteredSolution}`: null}
    </div>
  )
}

export default EasyMode