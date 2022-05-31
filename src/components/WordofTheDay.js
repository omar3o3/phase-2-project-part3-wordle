import React, { useState, useEffect } from 'react'

function WordofTheDay() {

  let randomWords = require('random-words');
  // console.log(randomWords());
  const [wordState, setWordState] = useState(randomWords())
  const [definitonState , setDefinition] = useState('')

  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordState}`)
      .then(resp => resp.json())
      .then(data => breakDownDef(data))
  }, [])

  const breakDownDef = (data) => {
  // to get one of the meanings
  // console.log(data[0].meanings[0].definitions[0].definition)
  // console.log(data[0].meanings[1].definitions[0].definition)
  // console.log(data[0].meanings[2].definitions[0].definition)

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
          <h1 className='m-5 display-3' style={{textAlign: 'center'}} >Word of The Day</h1>
        </div>
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}}/>
    </div>
    <h3 className = 'text-capitalize display-5 mb-5 text-decoration-underline' >{wordState}</h3>
    <p className='lead fs-3'>Definition: {definitonState}</p>
    <button className='btn btn-outline-dark btn-lg mb-5' onClick={refreshPage}>Get a new Word!</button>
    <br />
    <br />
  </div>
)
}

export default WordofTheDay