import React, { useState, useEffect } from 'react';

function useGameMode({ filteredSolution }) {

    const [currentGuess, setCurrentGuess] = useState('');
    const [oldGuesses, setOldGuesses] = useState([...Array(6)]);

    const [turnValue, setCurrentTurn] = useState(0);

    const [gameWon, setGameWon] = useState(false);
    const [gameLost, setGameLost] = useState(false);


    const colorGuessValues = () =>{
        const solutionArray = [...filteredSolution];
        const formattedGuess = [...currentGuess].map(letter => {
            return {key: letter , color: 'grey'}
        })

        formattedGuess.forEach((letter , i) => {
            if (letter.key === solutionArray[i]){
                formattedGuess[i].color = 'green';
                solutionArray[i] = null;
            }
        })

        formattedGuess.forEach((letter , i)=>{
            if(solutionArray.includes(letter.key) && letter.color !== 'green'){
                formattedGuess[i].color = 'yellow';
                solutionArray[solutionArray.indexOf(letter.key)] = null;
            }
        })
        return formattedGuess
    }

    const addGuessValues = (guessObject) =>{
        setOldGuesses(prev => [...prev , oldGuesses[turnValue] = guessObject])

        if (currentGuess === filteredSolution){
            setGameWon(true)
        }
        setCurrentTurn(prev => prev + 1)
    }

    const handleKeyUp = ({ key }) => {

        if (key === 'Enter' && currentGuess.length === 5) {
            if (turnValue > 5) {
                return console.log('no more turns available');
            }
            else{
                let colorGuessValue = colorGuessValues();
                addGuessValues(colorGuessValue)
            }
        }

        if (key === 'Backspace') {
            setCurrentGuess(prev => prev.slice(0, -1))
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(currentGuess => currentGuess + key)
            }
        }
    }

    return {handleKeyUp , currentGuess , oldGuesses , turnValue , gameLost , gameWon}
}

export default useGameMode