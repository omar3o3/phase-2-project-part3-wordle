import React from 'react'
import './Input.css'
function Input({word}) {
    const myDivStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      };
    return<div>
        {word.split('').map((letter, i) =>{
        return(
          <div className="row border border-dark "  key={letter}style={myDivStyle}>
            {letter}
          </div>
        )
      })}
    </div>
    
}

export default Input