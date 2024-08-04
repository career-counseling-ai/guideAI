import Logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-10 py-[14px] bg-background'>
        <div>
            <Link to ='/'>
                <img src={Logo} alt="Logo" className='h-8'/>
            </Link>
            
        </div>
        <ul className='flex gap-6'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/guidance"><li>Guidance</li></Link>
            <Link to="/"><li>Explore</li></Link>
            <Link to="/mentorship"><li>Mentorship</li></Link>

        </ul>
    </nav>
  )
}
