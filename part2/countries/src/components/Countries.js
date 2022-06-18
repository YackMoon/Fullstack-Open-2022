const Countries = ({ countriesToShow, setCountriesToShow }) => {
    return (
        countriesToShow.length === 1
        ? null
        : countriesToShow.map((country) =>
        <div key={country.name.official}>
            {country.name.common}{' '}
            <button onClick={() => setCountriesToShow([country])}>show</button>
        </div>)
    )
}

export default Countries