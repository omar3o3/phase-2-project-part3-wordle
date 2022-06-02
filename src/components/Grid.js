import React from 'react'
import Row from './Row'

function Grid({turnValue , currentGuess , oldGuesses}) {
  return (
    <div>
        {oldGuesses.map((word , i)=>{
            return (<Row key={i} oldGuesses ={oldGuesses}/>)
        })}
    </div>
  )
}

export default Grid