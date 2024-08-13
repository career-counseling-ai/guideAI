import Logo from '../assets/images/logo.svg';
import { NavLink, Outlet } from 'react-router-dom';
import Explore from './Explore';

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between text-textColor items-center px-[10rem] py-[1.5rem] bg-background  ">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="w-[8rem]" />
          </NavLink>
        </div>
        <ul className="flex gap-6">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/guidance">
            <li>Guidance</li>
          </NavLink>
          <Explore />
          <NavLink to="/mentorship">
            <li>Mentorship</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
