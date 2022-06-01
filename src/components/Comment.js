import React from 'react';

function Comment({ name, comment }) {

    return (
        <div className="m-5 p-2 shadow">
            <p className='lead success'>"{comment}" -{name}</p>
        </div>
    )
}

export default Comment;