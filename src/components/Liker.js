import React, { useState, useEffect } from 'react'
import Comment from './Comment';
import Button from 'react-bootstrap/Button';

function Liker() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [commentsArr, setCommentsArr] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/feedback/1')
    .then(r => r.json())
    .then((data) => {
      setLikes(data.likes);
      setDislikes(data.dislikes);
    })

    fetch('http://localhost:4000/comments')
    .then(r => r.json())
    .then((data) => setCommentsArr(data) )
  }, [])

//  console.log(likes)
  function handleClickLike() {
    setLikes(likes => likes = ++likes)
    
    fetch('http://localhost:4000/feedback/1', {
      method: 'PATCH',  
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: likes }),
    })
    .then(r => r.json())
    .then((update) => {
      console.log(update);
    })
  }

  console.log(likes)

  function handleClickDislike() {
    setDislikes(dislikes+1);
    fetch('http://localhost:4000/feedback/1', {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dislikes: dislikes }),
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

    fetch('http://localhost:4000/comments', {
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

  // const hidden = {
  //   visibility: 'hidden',
  // }

  function handleToggle() {
    setToggle(!toggle);
  }

  const renderComments = commentsArr.map((comment) => <Comment key={comment.id} name={comment.name} comment={comment.comment}/>);

  return (
    <div className='text-center'>
      <p className='display-6'>What did you think of the game?</p>
      <Button className='display-6 lead text-center' variant="outline-primary" onClick={handleClickLike}>👍&nbsp;{likes}</Button>
      &nbsp;&nbsp;&nbsp;
      <Button className='display-6 lead text-center' variant="outline-primary" onClick={handleClickDislike}>👎&nbsp;{dislikes}</Button>
      <br /><br />
      <br /><br />
      <h3 className='text-center'>Comments</h3>
      <form className='lead text-center' onSubmit={handleSubmit}>
        {/* <label>What did you think of the game?</label> */}
        <label>Name</label>
        <br />
        <input type="text" name="name" value={newName} placeholder="Enter name..." onChange={handleNewName}></input>
        <br />
        <label>Comment</label>
        <br />
        <textarea name="comment" type="text" rows="4" cols="50" value={newComment} placeholder="Enter comment..." onChange={handleNewComment}></textarea>
        <br />
        <Button type="submit" value="Submit">Submit</Button>
      </form>
      <hr/>
      <Button onClick={handleToggle} variant="outline-secondary">{toggle ? "Hide Comments" : "Show Comments"}</Button>
      {toggle ? <div>{renderComments}</div> : null}
    </div>
  )
}

export default Liker;