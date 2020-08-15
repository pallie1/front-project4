import React from 'react';
import Form from 'react-bootstrap/Form'

const CafeForm = ({ handleCafeSubmit,handleCafeChange, handleCoordsSubmit, inputCafe}) => {
    return (
        <form onSubmit={handleCoordsSubmit}>
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
            <button>First Get Coordinates</button>
            <button onClick={() => handleCafeSubmit()}>Then Submit Cafe</button>
        </form>
    )
}

export default CafeForm;


