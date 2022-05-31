import React from 'react';
import Liker from './Liker';


function About() {
  return (
    <>
        <h1 className='display-6 lead text-center'>About</h1>
        <p className='text-center'>This is a project that is meant to recreate the popular, contemporary game called 'Wordle'.</p>
        <br /><br /><br />
        <Liker/>
    </>
  )
}

export default About