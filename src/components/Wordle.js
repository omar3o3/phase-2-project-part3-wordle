import React, { useState, useEffect } from 'react';
import Rows from './Rows';
import Button from 'react-bootstrap/Button';
//James was here

function Wordle() {
  const [solution, setSolution] = useState(null)
  const [turnValue, setCurrentTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guessState, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  let randomWords = require('random-words');
  const [wordState, setWordState] = useState(randomWords({exactly: 20,  maxLength: 6}))
  let solutionFind = wordState.find(word => word.length === 5);
  setSolution(solutionFind);
  console.log(solution)


  const formatGuess = () => {

  }

  const addNewGuess = () => {

  } 

  
  // useEffect(() => {
  //   window.addEventListener('keyup', handleKeyUp)

  //   return () => window.removeEventListener('keyup', handleKeyUp)
  // }, [handleKeyUp])


  const handleKeyUp = ({ key }) => {
    if (/^[A-Za-z]$/.test(key)) {
      if (guessState[turnValue].length < 5) {
        setCurrentGuess(prev => prev + key)
        setGuesses([guessState[turnValue] + key ])
      }
    }

    if (key === 'Backspace'){
      setCurrentGuess(prev => prev.slice(0, -1))
      setGuesses([guessState[turnValue] + key ].slice(0 , -1))
    }

    if(key === 'Enter' && guessState[turnValue].length === 5){
      setCurrentTurn(turnValue + 1)
      setGuesses({ ...guessState})

    }
  }

  // console.log(guessState)
  // console.log(turnValue)

  return (
    <div className='container'>

      {setCurrentGuess}
{/*       
       

      {/* <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark" style={{ height: '3.5rem' }}>
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
      </div> */}

    </div>
  )
}

export default Wordle