import React from 'react';
import Card from 'react-bootstrap/Card';

function Row({ word, currentGuess }) {

    if (word) {
        return (
            <div className='d-flex justify-content-center text-center'>
                {word.map((letter, i) => (
                    <Card style={{ width: '4.5rem', height: '4.5rem', backgroundColor: letter.color }} key={i} className='display-5'>
                            <Card.Text>
                                {letter.key}
                            </Card.Text>
                    </Card>
                ))}
            </div>
        )
    }

    if (currentGuess) {
        let splitGuess = currentGuess.split('');
        return (
            <div className='d-flex justify-content-center text-center'>
                {splitGuess.map((letter, i) => (
                    <Card style={{ width: '4.5rem', height: '4.5rem' }} key={i} className='display-5'>
                            <Card.Text>
                                {letter}
                            </Card.Text>
                    </Card>
                ))
                }
                {[...Array(5 - splitGuess.length)].map((_, i) => {
                    return (
                        <Card style={{ width: '4.5rem', height: '4.5rem' }} key={i}>
                                <Card.Text>
                                </Card.Text>
                        </Card>)
                })}
            </div>
        )
    }

    return (
        <div className='d-flex justify-content-center text-center'>
            <Card style={{ width: '4.5rem', height: '4.5rem' }}>
                    <Card.Text>
                    </Card.Text>
            </Card>
            <Card style={{ width: '4.5rem', height: '4.5rem' }}>
                    <Card.Text>
                    </Card.Text>
            </Card>
            <Card style={{ width: '4.5rem', height: '4.5rem' }}>
                    <Card.Text>
                    </Card.Text>
            </Card>
            <Card style={{ width: '4.5rem', height: '4.5rem' }}>
                    <Card.Text>
                    </Card.Text>
            </Card>
            <Card style={{ width: '4.5rem', height: '4.5rem' }}>
                    <Card.Text>
                    </Card.Text>
            </Card>
        </div>

    )
}

export default Row
