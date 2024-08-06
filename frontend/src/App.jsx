import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Navbar from "./components/Navbar";
//page components
import Home from './pages/Home';
import Guidance from "./pages/Guidance";
import Opportunities from "./pages/Opportunities";
import RoadMaps from "./pages/RoadMaps";
import Mentorship from "./pages/Mentorship";

//roadmaps
import ReactMap from "./components/Roadmaps/ReactMap";
import JavaScriptMap from "./components/Roadmaps/JavaScriptMap"

const router = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/guidance',element:<Guidance/>},
      {path:'/explore/opportunities',element:<Opportunities/>},
      {path:'/explore/roadmaps',element:<RoadMaps/>},
      {path:'/mentorship',element:<Mentorship/>},
    ]
  },
  {
    path: "/explore/roadmaps/react",
    element: <ReactMap />
  },
  {
    path: "/explore/roadmaps/javascript",
    element: <JavaScriptMap />
  }
]);

function App() {
  return (
    <div className="h-screen w-full">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
