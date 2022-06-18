import React from 'react'

const Filter = ({ filter, filterChange }) => {
    return (
        <p>
            filter shown with <input value={filter} onChange={filterChange}/>
        </p>
    )
}

export default Filter