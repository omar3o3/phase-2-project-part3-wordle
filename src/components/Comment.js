import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Comment({ comments }) {

    // const { name, comment } = comments
    const commentsArray = [comments]

    if (comments) {
        return (
            <Container fluid>
                {commentsArray.map(comment => (
                    <Row className='"justify-content-center"'>
                        <Col key={comment.id}>
                            <CardGroup>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className='lead fs-3 fw-bold'>{comment.name}</Card.Title>
                                        <Card.Text className='lead fs-4'>
                                            {comment.comment}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                ))}
            </Container>
        )
    }

    // <Col>
    // <CardGroup>
    //     <Card>
    //         <Card.Body>
    //             <Card.Title>{name}</Card.Title>
    //             <Card.Text>
    //                 {comment}
    //             </Card.Text>
    //         </Card.Body>
    //     </Card>
    // </CardGroup>
    // </Col>

    return (
        // <div className='border-top border-primary my-2'>
        //     <p className='lead justify-content-center my-3'>"{comment}" -{name}</p>
        // </div>

        // <Container>
        //     <Row>
        //         <Col>
        //             <CardGroup>
        //                 <Card>
        //                     <Card.Body>
        //                         <Card.Title></Card.Title>
        //                         <Card.Text>
        //                         </Card.Text>
        //                     </Card.Body>
        //                 </Card>
        //             </CardGroup>
        //         </Col>
        //     </Row>
        // </Container>

        <div className='d-flex justify-content-center text-center'>

        </div>
    )
}

export default Comment;

//<div className='d-flex justify-content-center text-center' style={{width : "auto" , height: 'auto'}}>