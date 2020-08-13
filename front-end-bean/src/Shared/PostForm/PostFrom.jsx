import React from 'react';

const PostForm = ({ handleChange, handleSubmit, input}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>Image Link: </label>
            <input 
                onChange={handleChange}
                name='img'
                value={input.img}
                placeholder='Link to a hosted image. ex: imgur'
            />
            <label>Rate: </label>
            <input
                onChange={handleChange}
                name='rate'
                value={input.rate}
                placeholder='Rate out of 10. ex: 5.6'
            />
            <label>Review: </label>
            <input 
                onChange={handleChange}
                name='content'
                value={input.content}
                placeholder='What did you think?'
            />
        </form>
    )
}

export default PostForm;