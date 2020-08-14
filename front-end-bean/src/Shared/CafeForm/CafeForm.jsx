import React from 'react';

const CafeForm = ({ handleCafeChange, handleCafeSubmit, inputCafe}) => {
    return (
        <form onSubmit={handleCafeSubmit}>
            <label>Cafe name: </label>
            <input 
                onChange={handleCafeChange}
                name='name'
                value={inputCafe.name}
                placeholder='Name of the cafe'
            />
            <label>Address: </label>
            <input
                onChange={handleCafeChange}
                name='address'
                value={inputCafe.address}
                placeholder='ex: 1233 N Wells'
            />
            <label>City: </label>
            <input 
                onChange={handleCafeChange}
                name='city'
                value={inputCafe.city}
                placeholder='ex: Chicago'
            />
            <label>State: </label>
            <input 
                onChange={handleCafeChange}
                name='state'
                value={inputCafe.state}
                placeholder='ex: IL'
            />
            <label>Postal Code: </label>
            <input 
                onChange={handleCafeChange}
                name='postalcode'
                value={inputCafe.postalcode}
                placeholder='ex: 60610'
            />
            <label>Country: </label>
            <input 
                onChange={handleCafeChange}
                name='country'
                value={inputCafe.country}
                placeholder='ex: USA'
            />
            <button>Submit</button>
        </form>
    )
}

export default CafeForm;