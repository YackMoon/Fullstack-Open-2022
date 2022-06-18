import WeaterData from "./WeatherData"

const CountryData = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>
            <h3>Language:</h3>
            <ul>
                {Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={`${country.name.common} flag`}/>
            <WeaterData city={country.capital} />
        </div>
    )
}

export default CountryData