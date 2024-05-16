import { Link, useParams } from 'react-router-dom'
import data, { Continent } from '../../data/continents'
import Countries from './Country'

function SelectContinent() {
  const { name } = useParams()
  const continent: Continent = data[name as string]
  return (
    <div>
      <h2>{name}</h2>
      <img src={`/images/${continent.image}`} alt="" />
      <ul>
        {continent.countries.map((country, idx) => (
          <li key={idx}>
            <Link to={`/countries/${country.name}`}> {country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectContinent
