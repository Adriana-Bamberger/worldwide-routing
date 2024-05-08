import { Link } from 'react-router-dom'
import data from '../../data/continents.ts'
function Nav() {
  const continentName = Object.keys(data)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {continentName.map((continent, idx) => (
          <li key={idx}>
            <Link to={`/continent/${continent}`}>{continent}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
