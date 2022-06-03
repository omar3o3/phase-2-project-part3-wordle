import React from 'react';
import Liker from './Liker';


function About() {
  return (
    <div className='mb-5'>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
        <div>
          <h1 className='m-5 display-3' style={{ textAlign: 'center' }} >About</h1>
        </div>
        <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }} />
      </div>
      <p className='text-center fs-3'>This is a project that is meant to recreate the popular, contemporary game called 'Wordle'.</p>
      <Liker />
    </div>
  )
}

export default About