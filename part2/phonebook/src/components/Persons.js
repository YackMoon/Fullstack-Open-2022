import React from 'react'

const Persons = ({filterPersons, buttonDeletionOf}) => {
  return (
    <div>
      {filterPersons.map((person) => 
    <p key={person.name}>{person.name} {person.number} <button onClick={() =>buttonDeletionOf(person)}>delete</button></p>)}
    </div>
  )
}

export default Persons