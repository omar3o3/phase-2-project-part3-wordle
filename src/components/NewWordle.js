import React, { useEffect } from 'react'
import UseWordle from './UseWordle'

export default function NewWordle({ solution }) {
  const { currentGuess, handleKeyup } = UseWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  return (
    <div>
      <div>Current Guess - {currentGuess}</div>
    </div>
  )
}