import React from 'react';

function Comment({ commentObj }) {
    const { name, comment } = commentObj;

    return (
        <div>
            <p className='lead'>{comment} -{name}</p>
        </div>
    )
}

export default Comment;