import React from 'react';
import Card from 'react-bootstrap/Card';

function Row({ oldGuesses }) {

    // console.log(oldGuesses)
    if (oldGuesses){
    oldGuesses.map((word , i) => {
        return (
            <Card style={{ width: '8rem', height: '8rem' }} key = {i}>
                <Card.Body>
                    <Card.Text>
                        {word.key}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    })
}

    return (
        <div className='d-flex justify-content-center'>
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
