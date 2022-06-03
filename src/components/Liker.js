import React, { useState } from 'react'
import Comment from './Comment';
import uuid from 'react-uuid'; //random ID generator
import { feedbackComments, feedbackLikes } from '../data/feedback';
import Button from 'react-bootstrap/Button'

function Liker() {
  const [likes, setLikes] = useState(feedbackLikes.likes);
  const [dislikes, setDislikes] = useState(feedbackLikes.dislikes);
  const [commentsArr, setCommentsArr] = useState(feedbackComments);
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');
  const [toggle, setToggle] = useState(true);

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
    setCommentsArr([...commentsArr, addComment]);
    setNewName('');
    setNewComment('');
  }

  function handleToggle() {
    setToggle(!toggle);
  }

  const renderComments =  commentsArr.map((comment) => <Comment key={uuid()} commentObj={comment}/>);

  return (
    <div className='text-center'>
      <p className='fs-3'>What did you think of the game?</p>
      <Button className='display-6 lead text-center mb-3' variant="outline-primary" onClick={()=>setLikes(likes+1)}>👍&nbsp;{likes}</Button>
      &nbsp;&nbsp;&nbsp;
      <Button className='display-6 lead text-center mb-3' variant="outline-primary" onClick={()=>setDislikes(dislikes+1)}>👎&nbsp;{dislikes}</Button>
      <h3 className='text-center'>Leave a Comment</h3>
      <form className='lead text-center' onSubmit={handleSubmit}>
        {/* <label>What did you think of the game?</label> */}
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
      <hr/>
      <Button onClick={handleToggle} variant="outline-secondary" className='mb-3'>{toggle ? "Hide Comments" : "Show Comments"}</Button>
      {toggle ? <div>{renderComments}</div> : null}
    </div>
  )
}

export default Liker;