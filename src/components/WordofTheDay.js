import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

function WordofTheDay() {

  let randomWords = require('random-words');
  const [wordState, setWordState] = useState(randomWords())
  const [definitonState , setDefinition] = useState('')

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordState}`)
      .then(resp => resp.json())
      .then(data => breakDownDef(data))
  }, [refreshPage])

  const breakDownDef = (data) => {
  console.log(data);
  setDefinition(data[0].meanings[0].definitions[0].definition)
  }

  function refreshPage() {
    window.location.reload(false);
  }

return (
  <div className='text-center'>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
        <div>
          <h1 className='m-5 display-3' style={{textAlign: 'center'}} >Learn a New Word</h1>
        </div>
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}}/>
    </div>
    <h3 className = 'text-capitalize display-5 mb-5 text-decoration-underline' >{wordState}</h3>
    <p className='lead fs-3'>Definition: {definitonState}</p>
    <Button className='btn-lg mb-5' variant="outline-dark" onClick={refreshPage}>Get a new Word!</Button>
    <br />
    <br />
  </div>
)
}

export default WordofTheDay