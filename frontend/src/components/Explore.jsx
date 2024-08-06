import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";

export default function Explore() {
    const [isOpen,setIsOpen] = useState(false);

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () =>{
        setIsOpen(false);
    }

  return (
    <div>
        <button onClick={handleDropdown} className='flex items-center'>
            Explore <IoMdArrowDropdown className='ml-1 mt-1'/>
        </button>
        {isOpen && (
            <div className='absolute mt-3 bg-white shadow-lg rounded-md z-10'>
                <ul>
                    <li className='p-2'>
                        <NavLink to='/explore/opportunities' onClick={closeDropdown}>Opportunities</NavLink>
                    </li>
                    <li className='p-2'>
                        <NavLink to='/explore/roadmaps' onClick={closeDropdown}>Road Maps</NavLink>
                    </li>
                </ul>
            </div>
        )}
    </div>
  )
}
