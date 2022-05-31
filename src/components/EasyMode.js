import React, { useState, useEffect } from 'react'

function EasyMode() {

  const [guessValue, setGuessValue] = useState('')
  const [previousGuesses , setPreviousGuesses] = useState([])

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [guessValue])


  const handleKeyUp = ({ key }) => {
    if (/^[A-Za-z]$/.test(key)) {
      if (guessValue.length < 5) {
        setGuessValue(prev => prev + key)
      }
    }

    if (key === 'Backspace'){
      setGuessValue(prev => prev = prev.slice(0, -1))
    }

    if(key === 'Enter' && guessValue.length === 5){
      setPreviousGuesses(prev => [...prev , guessValue])
    }

  }



  
  if (guessValue !== '') {
    console.log(guessValue);
  }

  if(previousGuesses.length > 0){
    console.log(previousGuesses);
  }


  return (
    <div className='container'>

      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark bg-warning" style={{height: '3.5rem'}}>
          {guessValue[0] ? guessValue[0] : ''}
        </div>
        <div className="col border border-dark bg-success" style={{height: '3.5rem'}}>
        {guessValue[1]  ? guessValue[1] : ''}
        </div>
        <div className="col border border-dark bg-secondary" style={{height: '3.5rem'}}>
        {guessValue[2]  ? guessValue[2] : ''}
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
        {guessValue[3]  ? guessValue[3] : ''}
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
        {guessValue[4]  ? guessValue[4] : ''}
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
      <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
      <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
      </div>

      <div className="row align-items-start m-5 display-5 text-center">
      <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
        <div className="col border border-dark" style={{height: '3.5rem'}}>
          
        </div>
      </div>

    </div>
  )
}

export default EasyMode