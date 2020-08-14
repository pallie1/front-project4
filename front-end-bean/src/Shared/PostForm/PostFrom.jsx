import React from 'react';

const PostForm = ({ handlePostChange, handlePostSubmit, inputPost}) => {
    return (
        <form onSubmit={handlePostSubmit}>
            <label>Image Link: </label>
            <input 
                onChange={handlePostChange}
                name='img'
                value={inputPost.img}
                placeholder='Link to a hosted image. ex: imgur'
            />
            <label>Rate: </label>
            <input
                onChange={handlePostChange}
                name='rate'
                value={inputPost.rate}
                placeholder='Rate out of 10. ex: 5.6'
            />
            <label>Review: </label>
            <input 
                onChange={handlePostChange}
                name='content'
                value={inputPost.content}
                placeholder='What did you think?'
            />
        </form>
    )
}

export default PostForm;