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
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
