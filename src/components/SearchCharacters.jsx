import React, { useState, useEffect } from 'react';
import '../styles/searchCharacters.css';

export const SearchCharacters = ({ setSearch }) => {

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    return (
        <form className='form-search-container'>
            <input placeholder='Sear for Characters' type="text" className='' onChange={handleChange} />
            <button className='btn btn-primary'>Search</button>
        </form>
    )
}

