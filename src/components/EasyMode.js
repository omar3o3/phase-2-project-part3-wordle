import React, { useState, useEffect } from 'react';
import useGameMode from './useGameMode';

function EasyMode({filteredSolution}) {

  // let randomWords = require('random-words');
  // let solutionList = randomWords({exactly: 25, maxLength: 7})
  // let filteredSolution = solutionList.find(word => word.length === 5)

  const {handleKeyUp , currentGuess} = useGameMode({filteredSolution})

  // console.log(currentGuess);
  console.log(filteredSolution);

  useEffect(()=>{
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  },[currentGuess , handleKeyUp])

  return (
    <div>
      {currentGuess}
    </div>
  )
}

export default EasyMode