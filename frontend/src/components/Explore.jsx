import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useRef } from 'react';

export default function Explore() {
    const [open,setOpen] = useState(false);

    const handleClose = ()=>{
        setOpen(false);
    }

    let exploreRef = useRef();

    useEffect(()=>{
        let handle = (e)=>{
            if(!exploreRef.current.contains(e.target)){
                setOpen(false);
                //console.log(exploreRef.current)
            }
        }
        document.addEventListener("mousedown",handle)

        return()=>{
            document.removeEventListener("mousedown",handle)
        }
    });

  return (
    <div>
        <button onClick={()=>{setOpen(!open)}} className='flex items-center'>
            Explore <IoMdArrowDropdown className='ml-1 mt-1'/>
        </button>
        {open && (
            <div className='absolute mt-3 bg-white shadow-lg rounded-md z-10' ref={exploreRef}>
                <ul>
                    <li className='p-2'>
                        <NavLink to='/explore/opportunities' onClick={handleClose}>Opportunities</NavLink>
                    </li>
                    <li className='p-2'>
                        <NavLink to='/explore/roadmaps' onClick={handleClose}>Road Maps</NavLink>
                    </li>
                </ul>
            </div>
        )}
    </div>
  )
}
