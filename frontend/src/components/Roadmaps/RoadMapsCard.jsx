import { NavLink } from 'react-router-dom';

function RoadMapsCards({ heading, subheading, route }) {
  return (
    <div>
      <NavLink
        to={`/explore/roadmaps/${route}`}
        className="block max-w-sm p-6 bg-[#dadadb] border-b-2 border-[#dadadb] rounded-lg shadow hover:bg-gray-100 hover:border-highLight hover:border-b-2 "
      >
        <div className="w-72 h-28">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-textColor">
            {heading}
          </h5>
          <p className="font-normal text-gray-500">
            {subheading}
          </p>
        </div>
      </NavLink>
    </div>
  );
}

export default RoadMapsCards;