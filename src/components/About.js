import React from 'react';
import Liker from './Liker';
//json-server --watch db.json --port 3003


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
      <p className='text-center fs-4'>
        This is a project meant to recreate the popular, contemporary game called 'Wordle'.
      </p>
      <br />
      <p className='text-center fw-semibold fs-3'>
        How To Play
      </p>
      <div className="d-flex">
        <ol className="mx-auto justify-content-center fs-5">
          <li>Enter a 5 letter word.</li>
          <li>Upon submitting a guess, you will see different colors around the tiles.</li>
            <ul>
              <li><span className="fw-semibold px-2" style={{ backgroundColor: '#75EF7D' }}>Green Tile</span> - the character is in the word and IS in the correct place.</li>
              <li><span className="fw-semibold px-2" style={{ backgroundColor: 'yellow' }}>Yellow Tile</span> - the character is in the word, but it is NOT in the correct place.<br /> There can also be two or more of this character.</li>
              <li><span className="fw-semibold px-2" style={{ backgroundColor: '#D5D2D2' }}>Grey Tile</span> - the character is NOT in the word.</li>
            </ul>
          <li>You have 6 attempts. Good luck!</li>
        </ol>
      </div>

      <br /><br /><br />

      <Liker />
    </div>
  )
}

export default About