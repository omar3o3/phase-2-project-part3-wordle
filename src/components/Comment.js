import React from 'react';

function Comment({ name, comment }) {

    return (
        <div className="m-5 shadow border">
            <p className='lead'>"{comment}" -{name}</p>
        </div>
    )
}

export default Comment;