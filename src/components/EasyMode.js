import React, { useState, useEffect } from 'react';
import useGameMode from './useGameMode';
import Grid from './Grid';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';

function EasyMode({ filteredSolution }) {

  const [solutionHint, setSolutionHint] = useState('');
  const [showHint, setShowHint] = useState(false);
  const { handleKeyUp, currentGuess, oldGuesses, turnValue, gameLost, gameWon } = useGameMode({ filteredSolution });

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [currentGuess, handleKeyUp])

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${filteredSolution}`)
      .then(resp => resp.json())
      .then(data => setSolutionHint(data[0].meanings[0].definitions[0].definition))
  }, [filteredSolution])

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='my-5 justify-content-center'>
      <div className='text-center'>
        {gameWon || gameLost ? <Button className='btn-lg my-2' variant="outline-primary" onClick={refreshPage}>Play Again!</Button> : null}
      </div>
      <div>
        {gameWon ? (<Alert variant='success' className='text-center fs-1'>You won! It took you {turnValue === 1 ? '1 try.' : `${turnValue} tries.`}</Alert>) : null}
      </div>
      <div>
        {gameLost ? <Alert variant='danger' className='text-center fs-1'>Better luck next time, the solution is {filteredSolution} </Alert>: null}
      </div>
      <div className='text-center my-3'>
        <Button onClick={() => setShowHint(!showHint)} variant="outline-dark btn-lg">Need a hint? Get the definition</Button>
        {showHint ? <p className='my-2 fs-3 fst-italic'>{solutionHint}</p> : null}
      </div>
      <Grid currentGuess={currentGuess} oldGuesses={oldGuesses} turnValue={turnValue} />
    </div>
  )
}

export default EasyMode