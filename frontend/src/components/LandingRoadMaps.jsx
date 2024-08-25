import RoadMapsCards from './RoadMapsCards';
import { data } from '../utils/popularcareerdata';

function LandingRoadMaps() {
  return (
    <div className=" px-40 py-20 bg-background border ">
      <h1 className="text-[2.25rem] mt text-center">
        Discover the Most Popular Roadmaps
      </h1>
      <div className="grid grid-cols-3 items-center justify-center gap-10 mt-20 ">
        {data.map((item) => {
          return (
            <RoadMapsCards
              key={item.id}
              heading={item.heading}
              subheading={item.subheading}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LandingRoadMaps;
