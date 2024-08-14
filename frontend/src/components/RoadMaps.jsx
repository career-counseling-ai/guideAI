import Sidebar from "./Roadmaps/Sidebar";
import { Outlet} from "react-router-dom";


function RoadMaps() {
  return (
    <div className="h-screen w-screen flex bg-white border border-sky-500">
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
