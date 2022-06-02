import React from 'react';
import Card from 'react-bootstrap/Card';

function Row({ word, currentGuess }) {

    if (word) {
        return (
            <div className='d-flex justify-content-center'>
                {word.map((letter, i) => (
                    <Card style={{ width: '8rem', height: '8rem', backgroundColor: letter.color }} key={i} className='display-5'>
                        <Card.Body>
                            <Card.Text>
                                {letter.key}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }

    if (currentGuess) {
        let splitGuess = currentGuess.split('');
        return (
            <div className='d-flex justify-content-center'>
                {splitGuess.map((letter, i) => (
                    <Card style={{ width: '8rem', height: '8rem' }} key={i} className='display-5'>
                        <Card.Body>
                            <Card.Text>
                                {letter}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
                }
                {[...Array(5 - splitGuess.length)].map((_, i) => {
                    return (
                        <Card style={{ width: '8rem', height: '8rem' }} key={i}>
                            <Card.Body>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>)
                })}
            </div>
        )
    }

    return (
        <div className='d-flex justify-content-center'>
            <Card style={{ width: '8rem', height: '8rem' }}>
                <Card.Body>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '8rem', height: '8rem' }}>
                <Card.Body>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '8rem', height: '8rem' }}>
                <Card.Body>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '8rem', height: '8rem' }}>
                <Card.Body>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '8rem', height: '8rem' }}>
                <Card.Body>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Row
