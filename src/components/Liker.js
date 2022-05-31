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
    //render new state, appends comment on page
    setCommentsArr([...commentsArr, addComment]);
    //reset input fields
    setNewName('');
    setNewComment('');
  }

  // const hidden = {
  //   visibility: 'hidden',
  // }

  function handleToggle() {
    setToggle(!toggle);
    // setCommentsArr([]);
  }

  const renderComments =  commentsArr.map((comment) => <Comment key={uuid()} commentObj={comment}/>);

  return (
    <div className='text-center'>
      <p className='display-6'>What did you think of the game?</p>
      <Button className='display-6 lead text-center' variant="outline-primary" onClick={()=>setLikes(likes+1)}>👍&nbsp;{likes}</Button>
      &nbsp;&nbsp;&nbsp;
      <Button className='display-6 lead text-center' variant="outline-primary" onClick={()=>setDislikes(dislikes+1)}>👎&nbsp;{dislikes}</Button>
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