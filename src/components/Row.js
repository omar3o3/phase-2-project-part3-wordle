import React from 'react';
import Card from 'react-bootstrap/Card';

function Row({formatGuess}) {

    // cons

    // const breakDownGuess = (string) =>{
    //     (string.map(letter =>{
    //       return {key: letter , color: 'white'}
    //     }))
    //   }

    let breakDown = formatGuess.map(letter => {
        return {key: letter , color: 'white'}
    })

    return (
        <div className='d-flex justify-content-center'>
            <Card style={{ width: '8rem', height: '8rem' }}>
                <Card.Body>
                    <Card.Text>
                        {breakDown}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Row

// {formatGuess.map(letter => {
//     return {key: letter , color: 'white'}
// })}