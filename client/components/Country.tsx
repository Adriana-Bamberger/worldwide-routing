import { useParams } from 'react-router-dom'
import countries from '../../data/countries'

function Countries() {
  const { name } = useParams()
  console.log(name)
  const country = countries.find((element) => element.name === name)

  return (
    <>
      <div key={country?.name}>
        <h2>{country?.name}</h2>
        <p>
          <span>Captail City: </span>
          {country?.capital}
        </p>
        <p>
          <span>Size: </span>
          {country?.areaSqKms}
        </p>
        <p>
          <span>Population of People: </span>
          {country?.population}
        </p>
        <p>
          <span>Next-Door-Neighbours: </span>
          {country?.neighbours}
        </p>
        <p>
          <span>Currency: </span>
          {country?.currencyName} {`(${country?.currencyCode})`}
        </p>
        <p>{country?.flag}</p>
      </div>
    </>
  )
}

export default Countries
