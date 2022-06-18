import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import CountryData from './components/CountryData'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [countriesToShow ,setCountriesToShow] = useState([])

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response =>{
      setCountries(response.data)
    })
  }, [])


  const handleFilterChange = (event) => {
    const inputText = event.target.value
    setFilter(inputText)
    setCountriesToShow(
      countries.filter((country) =>
      country.name.common.toLowerCase().includes(inputText.toLowerCase()))
    )
  }

    
  return (
    // <div>
    //   <p>filter shown with <input value={filter} onChange={handleFilterChange}/></p> 
    //   {filter === ''
    //   ? ''
    //   : filterCounties.length > 10
    //     ? 'Too many matches, specify another filter'
    //     : filterCounties.length > 1
    //       ? filterCounties.map(country => (
    //         <p key={country.name}>{country.name} <button onClick={() => setShowDetail(country)}>show</button></p>))
    //       : filterCounties.map(country => (
    //         <>
    //           <h1>{country.name}</h1>
    //           <p>capital {country.capital}</p>
    //           <p>area {country.area}</p>
    //           <h2>language:</h2>
    //           <ul>
    //             {country.languages.map(lan => <li key={lan.name.toString()}>{lan.name}</li>)}
    //           </ul>
    //           <img src={country.flags.svg}/>
    //         </>
    //       ))}
    // </div>
    <div>
      <div>
      filter shown with <input value={filter} onChange={handleFilterChange}/>
      </div>
      {countriesToShow.length === 1
      ? (<CountryData country={countriesToShow[0]}/>)
      : null}
      {countriesToShow.length > 10
      ? (<p>Too many matches, specify aonther filter</p>)
      : (<Countries countriesToShow={countriesToShow} setCountriesToShow={setCountriesToShow}/>)}
    </div>
  )
}

export default App