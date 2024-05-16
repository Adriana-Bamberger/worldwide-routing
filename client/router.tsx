import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import SelectContinent from './components/Continent'
import { Countries } from '../data/countries'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="continent/:name" element={<SelectContinent />} />
      <Route path="countries/:name" element={<Countries />} />
    </Route>,
  ),
)

export default router
