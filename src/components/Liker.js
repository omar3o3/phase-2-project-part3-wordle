import React, { useState, useEffect } from 'react'
import Comment from './Comment';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function Liker() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [commentsArr, setCommentsArr] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3003/feedback/1')
      .then(r => r.json())
      .then((data) => {
        setLikes(data.likes);
        setDislikes(data.dislikes);
      })

    fetch('http://localhost:3003/comments')
      .then(r => r.json())
      .then((data) => setCommentsArr(data))
  }, [])

  function handleClickLike() {
    setLikes(likes + 1)

    fetch('http://localhost:3003/feedback/1', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then(r => r.json())
      .then((update) => {
        console.log(update);
      })
  }

  function handleClickDislike() {
    setDislikes(dislikes + 1);
    fetch('http://localhost:3003/feedback/1', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dislikes: dislikes + 1 }),
    })
      .then(r => r.json())
      .then((dislike) => {
        console.log(dislike)
      })
  }

  function handleNewName(e) {
    setNewName(e.target.value);
  }

  function handleNewComment(e) {
    setNewComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const addComment = {
      name: newName,
      comment: newComment
    };

    fetch('http://localhost:3003/comments', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addComment),
    })
      .then(r => r.json())
      .then(update => setCommentsArr([...commentsArr, update]))

    setNewName('');
    setNewComment('');
  }


  function handleToggle() {
    setToggle(!toggle);
  }

  const renderComments = commentsArr.map((comments) => <Comment key={comments.id} comments={comments}/>);

  return (
    <div className='text-center'>
      <p className='fs-3'>What did you think of the game?</p>
      <Button className='display-6 lead text-center mb-3' variant="outline-primary" onClick={handleClickLike}>👍&nbsp;&nbsp;{likes}</Button>
      &nbsp;&nbsp;&nbsp;
      <Button className='display-6 lead text-center mb-3' variant="outline-primary" onClick={handleClickDislike}>👎&nbsp;&nbsp;{dislikes}</Button>
      <h3 className='text-center'>Leave a Comment</h3>
      <form className='lead text-center' onSubmit={handleSubmit}>
        <label className='fs-4'>Name</label>
        <br />
        <input type="text" name="name" value={newName} placeholder="Enter name..." onChange={handleNewName}></input>
        <br />
        <label>Comment</label>
        <br />
        <textarea name="comment" type="text" rows="4" cols="50" value={newComment} placeholder="Enter comment..." onChange={handleNewComment}></textarea>
        <br />
        <Button type="submit" value="Submit">Submit</Button>
      </form>
      <hr />
      <Button onClick={handleToggle} variant="outline-secondary" className='mb-3'>{toggle ? "Hide Comments" : "Show Comments"}</Button>
      {toggle ? <div>{renderComments}</div> : null}
    </div>
  )
}

export default Liker;