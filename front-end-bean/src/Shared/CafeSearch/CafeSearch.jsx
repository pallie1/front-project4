import React from 'react';

const CafeSearch = ({ handleCafeSearchChange, handleCafeSearchSubmit, cafeSearchInput}) => {
    return (
        <form onSubmit={handleCafeSearchSubmit}>
            <label>Image Link: </label>
            <input 
                onChange={handleCafeSearchChange}
                name='name'
                value={cafeSearchInput.name}
                placeholder='Name of the Cafe'
            />
        </form>
    )
}

export default CafeSearch;