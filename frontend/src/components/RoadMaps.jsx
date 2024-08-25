import Sidebar from "./Roadmaps/Sidebar";
import { Outlet} from "react-router-dom";


function RoadMaps() {
  return (
    <div className="h-screen w-full flex bg-white">
      <div className="col-auto">
        <Sidebar/>
      </div>
      <div className="h-screen w-full">
        <Outlet/>
      </div>
    </div>
  );
}

export default RoadMaps;
