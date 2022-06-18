import React from 'react'

const PersonForm = ({ submitForm, name, nameChange, number, numberChange }) => {
    return (
        <form onSubmit={submitForm}>
            <div>
                name:<input value={name} onChange={nameChange}/>
            </div>
            <div>
                number:<input value={number} onChange={numberChange}/>
            </div>
            <div>
                <button type='submit'>Add</button>
             </div>
        </form>
    )
}

export default PersonForm