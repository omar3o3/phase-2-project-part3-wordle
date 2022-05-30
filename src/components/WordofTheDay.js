import React from 'react'

function WordofTheDay() {

  const Jabber = require('jabber');

  const jabber = new Jabber();

  // console.log(jabber.createWord(5))

  return (
    <div className='text-center'>
      <h1 className='m-5'>Word of The Day</h1>
      <h3>{jabber.createWord(5 , true)}</h3>
    </div>
  )
}

export default WordofTheDay