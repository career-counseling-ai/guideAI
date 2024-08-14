import { IoLogoJavascript} from "react-icons/io5";
import { LuAppWindow } from "react-icons/lu";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-gray-500 text-white p-4 h-screen">
        <a className="flex items-center text-2xl">
            <LuAppWindow/>
            <span className="m-2">Frontend</span>
        </a>
        <hr className="bg-gray-400"/>
        <ul className="flex-col pt-2 px-6 ">
             <li className="m-4">
                <NavLink to="html-roadmap" className="flex items-center text-xl">
                    <FaHtml5/>
                    <span className="mx-2">HTML</span>
                </NavLink>
            </li>
            <li className="m-4">
                <NavLink to="css-roadmap" className="flex items-center text-xl">
                    <FaCss3Alt/>
                    <span className="mx-2">CSS</span>
                </NavLink>
            </li>
            <li className="m-4">
                <NavLink to="js-roadmap" className="flex items-center text-xl">
                    <IoLogoJavascript/>
                    <span className="mx-2">JavaScript</span>
                </NavLink>
            </li>
            <li className="m-4">
                <NavLink to="react-roadmap" className="flex items-center text-xl">
                    <FaReact/>
                    <span className="mx-2">React</span>
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
