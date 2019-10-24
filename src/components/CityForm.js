import { useState, useEffect } from 'react';
import React, { Component }  from 'react';
import { restElement } from '@babel/types';

export function CityForm(props) {
    const [city, setCity] = useState("");

    const handleSubmit = (evt) => {
        // evt.preventDefault();
        setCity(`Submitting City ${city}`)
        // form.reset()
        console.log('hello',city)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> City:
                <input type="text" value={city} onChange={e => setCity(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CityForm;