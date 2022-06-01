import React from 'react';
import Card from 'react-bootstrap/Card';

function Row() {
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