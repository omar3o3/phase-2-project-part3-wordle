import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function EasyMode() {

  let randomWords = require('random-words');
  const [wordState, setWordState] = useState(randomWords({exactly: 20 ,  maxLength: 6}))

  let solutionFind = wordState.find(word => word.length === 5)

  const [turnValue, setCurrentTurn] = useState(0);

  const [guessState, setGuesses] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  })

  const [colorState , setColor] = useState('danger')

  // const [guessState, setGuesses] = useState({
  //   0: {guess: '' , color: colorState},
  //   1: {guess: '' , color: colorState},
  //   2: {guess: '' , color: colorState},
  //   3: {guess: '' , color: colorState},
  //   4: {guess: '' , color: colorState},
  //   5: {guess: '' , color: colorState},
  // })

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [guessState])


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
    <div className='container'>

      {/* <Button onclick ={handleColorChange}>Change Color</Button> */}

      <div className="row align-items-start m-5 display-5 text-center">
        <div id = '00' className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[0][0]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[0][1]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[0][2]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[0][3]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[0][4]}
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[1][0]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[1][1]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[1][2]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[1][3]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[1][4]}
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[2][0]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[2][1]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[2][2]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[2][3]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[2][4]}
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[3][0]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[3][1]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[3][2]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[3][3]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[3][4]}
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[4][0]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[4][1]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[4][2]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[4][3]}
        </div>
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
          {guessState[4][4]}
        </div>
      </div>

    </div>
  )
}

export default EasyMode