import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Comment({ comments }) {

    const commentsArray = [comments]

    if (comments) {
        return (
            <div>
                {commentsArray.map(comment => (
                    <Row sm={2} className='justify-content-center my-2'>
                        <Col>
                            <Card key={comment.id} className='shadow-sm'>
                                <Card.Body>
                                    <Card.Title className='lead fs-3 fw-bold'>{comment.name}</Card.Title>
                                    <Card.Text className='lead fs-4'>
                                        {comment.comment}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </div>
        )
    }

    return (
        <div>
        </div>
    )
}

export default Comment;