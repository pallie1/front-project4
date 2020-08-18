import React from 'react';
import './PostForm.scss';

const PostForm = ({ handlePostChange, handlePostSubmit, inputPost}) => {
    return (
        <form onSubmit={handlePostSubmit}>
            <label>Image Link: </label>
            <input 
                id='width-pf-1'
                onChange={handlePostChange}
                name='img'
                value={inputPost.img}
                placeholder='Link to a hosted image. ex: imgur'
            />
            <label>Rate: </label>
            <input
            id='width-pf-2'
                onChange={handlePostChange}
                name='rate'
                value={inputPost.rate}
                placeholder='Rate out of 10. ex: 5.6'
            />
                 
            <label>Review: </label>
            <div className='pf-bottom-div'>
            <input 
            id='width-pf-3'
                onChange={handlePostChange}
                name='content'
                value={inputPost.content}
                placeholder='What did you think?'
            />
            </div>
            <button className='button-class'>Submit</button>
        </form>
    )
}

export default PostForm;