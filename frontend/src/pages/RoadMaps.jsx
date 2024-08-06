import { NavLink } from "react-router-dom"

export default function RoadMaps() {
  return (
    <div className="h-screen w-full">
      <NavLink to="/explore/roadmaps/javascript"><li>JavaScript RoadMap</li></NavLink>
      <NavLink to="/explore/roadmaps/react"><li>React RoadMap</li></NavLink>
    </div>
  )
}
