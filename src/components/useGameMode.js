import React, { useState, useEffect } from 'react';

function useGameMode({ filteredSolution, handleInvalid }) {

    const [currentGuess, setCurrentGuess] = useState('');
    const [oldGuesses, setOldGuesses] = useState([...Array(6)]);

    const [turnValue, setCurrentTurn] = useState(0);

    const [gameWon, setGameWon] = useState(false);
    const [gameLost, setGameLost] = useState(false);

    const [wordChecker, setWordChecker] = useState('');

    const isValid = () => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentGuess}`)
            .then(resp => resp.json())
            .then(data => setWordChecker(data[0].meanings[0].definitions[0].definition))
            .then(() => handleIsValid())
            .catch(error => checkIfIsValid(error))
    }

    const checkIfIsValid = (error) =>{
        if (error) {
            let showError = handleInvalid()
        }
    }

    const handleIsValid = () =>{
        let colorGuessValue = colorGuessValues();
        addGuessValues(colorGuessValue)
    }

    const colorGuessValues = () => {
        const solutionArray = [...filteredSolution];
        const formattedGuess = [...currentGuess].map(letter => {
            return { key: letter, color: '#D5D2D2' }
        })

        formattedGuess.forEach((letter, i) => {
            if (letter.key === solutionArray[i]) {
                formattedGuess[i].color = '#75EF7D';
                solutionArray[i] = null;
            }
        })

        formattedGuess.forEach((letter, i) => {
            if (solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[i].color = 'yellow';
                solutionArray[solutionArray.indexOf(letter.key)] = null;
            }
        })
        return formattedGuess
    }

    const addGuessValues = (guessObject) => {

        if (currentGuess === filteredSolution) {
            setGameWon(true)
        }

        setOldGuesses(prev => {
            let latestGuesses = [...prev];
            latestGuesses[turnValue] = guessObject;
            return latestGuesses
        })

        setCurrentTurn(prev => prev + 1)
        setCurrentGuess('')
    }

    useEffect(() => {
        if (turnValue === 6 && gameWon === false) {
            setGameLost(true)
        }
    }, [turnValue, gameWon])

    const handleKeyUp = ({ key }) => {

        if (key === 'Enter' && currentGuess.length === 5) {
            if (turnValue > 5) {
                return console.log('no more turns available');
            }
            else {
                let runWordChecker = isValid();
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

    return { handleKeyUp, currentGuess, oldGuesses, turnValue, gameLost, gameWon }
}

export default useGameMode