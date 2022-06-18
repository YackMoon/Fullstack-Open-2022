import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personsService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(null)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [message])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const buttonDeletionOf = deletedPerson => {
    if (window.confirm(`Remove ${deletedPerson.name}?`)) {
      personsService
      .deletePerson(deletedPerson.id)
      .then(() =>{
        setPersons(filterPersons.filter(person => person.id !== deletedPerson.id))
        setMessage({ 
          text: `Delete ${deletedPerson.name} success`,
          type: 'success'})
      })
      .catch((error) => {
        setMessage({
          text: `Information ${deletedPerson.name} has already been removed from server`,
          type: "error",
        })
      })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const PersonObject = {
      name: newName,
      number: newNumber,
    }

    const all_names = persons.map(person => person.name)

    if (all_names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      
      const thatPerson = persons.find(person => person.name === newName)
      const changedPerson = Object.assign(thatPerson, PersonObject)

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personsService
        .update(thatPerson.id, PersonObject)
        .then(() => {
          setPersons(persons.map(person => person.name === newName ? changedPerson : person))
          setMessage({
            text: `Updated ${newName}'s number`,
            tpye: 'success'
          })
        })
        .catch((error) => setMessage({
          text: `${newName} was already removed from server`,
          type: 'error'
        }))
      }
    } else {
        personsService
        .create(PersonObject)
        .then(returnedObject => {
          setPersons(persons.concat(returnedObject))
          setMessage({
            text: `Added ${newName}`,
            type: 'success'
          })
        })
        .catch((error) => setMessage({
          text: error.response.data.error,
          type: 'error'
        }))
      }
      setNewName('')
      setNewNumber('') 
  }

  const filterPersons = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} filterChange={handleFilterChange}/>      
      <h2>Add a new</h2>
      <PersonForm submitForm={addPerson} name={newName} nameChange={handleNameChange} number={newNumber} numberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} buttonDeletionOf={buttonDeletionOf}/>
    </div>
  )
}

export default App