import React, { useState, useEffect } from 'react';
import Row from './Row'

function EasyMode() {

  let randomWords = require('random-words');
  const [wordState, setWordState] = useState(randomWords());
  const [gameWon , setGameWon] = useState(false);
  const [gameLost , setGameLost] = useState(false)

  const [turnValue, setCurrentTurn] = useState(0);

  const [currentGuess , setCurrentGuess] = useState('');
  // const [oldGuesses , setOldGuesses] = useState(oldGuesses => [...oldGuesses , currentGuess]);

  useEffect(()=>{
    window.addEventListener('keyup', handleKeyUp);

    if (gameWon){
      console.log('congrats you won')
    }
    if (turnValue > 5){
      setGameLost(!gameLost);
      return () => window.removeEventListener('keyup', handleKeyUp)
    }

    return () => window.removeEventListener('keyup', handleKeyUp);
  },[currentGuess])

  //, gameWon , turnValue


  const handleKeyUp = ({key}) =>{

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(currentGuess => currentGuess + key)
      }
    }

    if (key === 'Enter' && currentGuess.length === 5){
      setCurrentGuess(currentGuess)
    }
  }

  console.log(currentGuess);

  return (
    <div>
      <Row />
    </div>
  )
}

export default EasyMode

  // useEffect(() => {
  //   window.addEventListener('keyup', handleKeyUp)

  //   return () => window.removeEventListener('keyup', handleKeyUp)
  // }, [guessState])


  // const handleKeyUp = ({ key }) => {
  //   if (/^[A-Za-z]$/.test(key)) {
  //     if (guessState[turnValue].length < 5) {
  //       setGuesses({ ...guessState, [turnValue]: guessState[turnValue] + key })
  //     }
  //   }

  //   if (key === 'Backspace') {
  //     setGuesses({ ...guessState, [turnValue]: guessState[turnValue].slice(0, -1) })
  //   }

  //   if (key === 'Enter' && guessState[turnValue].length === 5) {
  //     setCurrentTurn(turnValue + 1)
  //     setGuesses({ ...guessState })
  //   }
  // }