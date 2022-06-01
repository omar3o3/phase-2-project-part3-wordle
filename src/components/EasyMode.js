import React, { useState, useEffect } from 'react'

function EasyMode() {

  let randomWords = require('random-words');
  const [wordState, setWordState] = useState(randomWords({ exactly: 20, maxLength: 9 }))
  // console.log(wordState);
  let filteredWords = wordState.find(word => word.length === 5)
  console.log(filteredWords);


  const [turnValue, setCurrentTurn] = useState(0);
  const [gameStatus, setGameStatus] = useState(false);

  const [guessState, setGuesses] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  })

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

    if (key === 'Backspace') {
      setGuesses({ ...guessState, [turnValue]: guessState[turnValue].slice(0, -1) })
    }

    if (key === 'Enter' && guessState[turnValue].length === 5) {
      setCurrentTurn(turnValue + 1)
      setGuesses({ ...guessState })
      if (guessState[turnValue] === filteredWords) {
        setGameStatus(!gameStatus)
      }
    }
  }

  return (
    <>
    {gameStatus ? 
    <h2 className='text-center text-danger display-1'>Congrats, You Won!</h2>
    : 
    null}

      <div className='container'>

        <div className="row align-items-start m-5 display-5 text-center">
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[0][0] ? guessState[0][0] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[0][1] ? guessState[0][1] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[0][2] ? guessState[0][2] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[0][3] ? guessState[0][3] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[0][4] ? guessState[0][4] : ''}
          </div>
        </div>

        <div className="row align-items-start m-5 display-5 text-center">
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[1][0] ? guessState[1][0] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[1][1] ? guessState[1][1] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[1][2] ? guessState[1][2] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[1][3] ? guessState[1][3] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[1][4] ? guessState[1][4] : ''}
          </div>
        </div>

        <div className="row align-items-start m-5 display-5 text-center">
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[2][0] ? guessState[2][0] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[2][1] ? guessState[2][1] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[2][2] ? guessState[2][2] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[2][3] ? guessState[2][3] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[2][4] ? guessState[2][4] : ''}
          </div>
        </div>

        <div className="row align-items-start m-5 display-5 text-center">
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[3][0] ? guessState[3][0] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[3][1] ? guessState[3][1] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[3][2] ? guessState[3][2] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[3][3] ? guessState[3][3] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[3][4] ? guessState[3][4] : ''}
          </div>
        </div>

        <div className="row align-items-start m-5 display-5 text-center">
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[4][0] ? guessState[4][0] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[4][1] ? guessState[4][1] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[4][2] ? guessState[4][2] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[4][3] ? guessState[4][3] : ''}
          </div>
          <div className="col border border-dark" style={{ height: '3.5rem' }}>
            {guessState[4][4] ? guessState[4][4] : ''}
          </div>
        </div>

      </div>
    </>
  )
}

export default EasyMode