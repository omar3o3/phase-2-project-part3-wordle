import React from 'react'
import Row from './Row'

function Grid({turnValue , currentGuess , oldGuesses}) {

  return (
    <div>
        {oldGuesses.map((word , i)=>{
          if(turnValue === i){
            return <Row key={i} currentGuess={currentGuess}/>
          }
          return (<Row key={i} word={word}/>)
        })}
    </div>
  )
}

export default Grid