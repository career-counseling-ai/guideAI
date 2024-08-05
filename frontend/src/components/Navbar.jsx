import Logo from '../assets/logo.svg'
import {NavLink, Outlet} from 'react-router-dom'
import Explore from './Explore'

export default function Navbar() {

  return (
    <div>
      <nav className='flex justify-between items-center px-10 py-[14px] bg-background'>
          <div>
              <NavLink to ='/'>
                  <img src={Logo} alt="Logo" className='h-8'/>
              </NavLink>
              
          </div>
          <ul className='flex gap-6'>
              <NavLink to="/"><li>Home</li></NavLink>
              <NavLink to="/guidance"><li>Guidance</li></NavLink>
              <Explore/>
              <NavLink to="/mentorship"><li>Mentorship</li></NavLink>
          </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>
    
  )
}
