import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Input from './Input';
//omar was here

function EasyMode() {

  let randomWords = require('random-words');
  const [wordState, setWordState] = useState(randomWords({exactly: 20 ,  maxLength: 6}));
  // const [colorState , setColor] = useState('yellow');

  let solutionFind = wordState.find(word => word.length === 5);
  // console.log(solutionFind);
  let len = 5;
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

  let correctLetter = 'f';
  let correctIndex = 2;
  let background = 'blue'

  console.log(guessState)

  return (
    <div className='container'>
        <div className="row align-items-start m-5 display-5 text-center" >
        <Input word={guessState[0]}/>
        <h1>Space</h1>
        <Input word={guessState[1]}></Input>
        <h1>Space</h1>
        
        <Input word={guessState[2]}></Input>
        <h1>Space</h1>

        <Input word={guessState[3]}></Input>
        <h1>Space</h1>

        <Input word={guessState[4]}></Input>
        <h1>Space</h1>



        </div>
      

      {/* <div className="row align-items-start m-5 display-5 text-center">
        {guessState[turnValue].split('').map((letter, i) =>{
          return(
            <div className="col border border-dark"  key={letter}style={{ height: '3.5rem', backgroundColor: letter===correctLetter && i===correctIndex? 'green' : letter===correctLetter?  'yellow' : 'grey'}}>
              {letter}
            </div>
          )
        })}
        {/* <div id = '00' className="col border border-dark"  style={{ height: '3.5rem'}}>
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
        </div> */}
      
  
    </div>
  )
}

export default EasyMode