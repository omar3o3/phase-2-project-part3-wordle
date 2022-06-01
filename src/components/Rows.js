import React, { useState, useEffect } from 'react'
import EasyMode from './EasyMode'

function Rows() {
    const [turnValue, setCurrentTurn] = useState(0);

  const [guessState, setGuesses] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: ''
  })

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [guessState])

  // const [colorState , setColor] = useState('white');

  const handleKeyUp = ({ key }) => {
    if (/^[A-Za-z]$/.test(key)) {
      if (guessState[turnValue].length < 5) {
        setGuesses({ ...guessState, [turnValue]: guessState[turnValue] + key })
      }
    }

    if (key === 'Backspace'){
      setGuesses({ ...guessState, [turnValue]: guessState[turnValue].slice(0 , -1)})
    }

    if(key === 'Enter' && guessState[turnValue].length === 5){
      setCurrentTurn(turnValue + 1)
      setGuesses({ ...guessState})
    }
  }
    return (
        <div>
            <EasyMode word={guessState[0]}></EasyMode>
            
            <EasyMode word={guessState[1]}></EasyMode>
            2
            <EasyMode word={guessState[2]}></EasyMode>
            3
            <EasyMode word={guessState[3]}></EasyMode>
            4
            <EasyMode word={guessState[4]}></EasyMode>
            5
        </div>
    )
}

export default Rows