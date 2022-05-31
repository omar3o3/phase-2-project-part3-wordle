import React, { useState } from 'react'
import Comment from './Comment';
import uuid from 'react-uuid'; //random ID generator
import { feedbackComments, feedbackLikes } from '../data/feedback';
import { NavLink } from 'react-bootstrap';

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
      <button className='display-6 lead text-center' onClick={()=>setLikes(likes+1)}>👍&nbsp;{likes}</button>
      &nbsp;&nbsp;&nbsp;
      <button className='display-6 lead text-center' onClick={()=>setDislikes(dislikes+1)}>👎&nbsp;{dislikes}</button>
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
        <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
      </form>
      <hr/>
      <button onClick={handleToggle}>{toggle ? "Hide Comments" : "Show Comments"}</button>
      {toggle ? <div>{renderComments}</div> : null}
    </div>
  )
}

export default Liker;