import React, { useState, useEffect } from 'react'

function WordofTheDay() {

  let randomWords = require('random-words');
  // console.log(randomWords());
  const [wordState, setWordState] = useState(randomWords())

  // const definitionFetch = () => {
  //   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWords()}`)
  //     .then(resp => resp.json())
  //     .then(data => setWordState(data))
  // }

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
  console.log(data)

  //need to iterate over the arrays within meanings key
  //then iterate over the definitions within each definitions key
  //create 2 callback functions to handle each iteration
  //second or third cb will handle creating elements for the definition
  }

return (
  <div className='text-center'>
    <h1 className='m-5'>Word of The Day</h1>
    <h3>{wordState}</h3>
  </div>
)
}

export default WordofTheDay