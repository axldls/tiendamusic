import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <header>

        <Link>
         <h1>AxMusic</h1>
        </Link>
        

        <nav>
            <ul>
                <li>
                    <NavLink to={`/categoria/2`}>Usados </NavLink>
                </li>

                <li>
                    <NavLink to={'/categoria/3'}>Nuevos</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar