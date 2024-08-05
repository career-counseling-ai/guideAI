import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Navbar from "./components/Navbar";
//page components
import Home from './pages/Home';
import Guidance from "./pages/Guidance";
import Opportunities from "./pages/Opportunities";
import RoadMaps from "./pages/RoadMaps";
import Mentorship from "./pages/Mentorship";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Navbar/>}>
//       <Route path="/" element={<Home />} />
//       <Route path="/guidance" element={<Guidance />} />
//       <Route path="/opportunities" element={<Opportunities />} />
//       <Route path="/roadmaps" element={<RoadMaps />} />
//       <Route path="/mentorship" element={<Mentorship />} />
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/guidance',element:<Guidance/>},
      {path:'/opportunities',element:<Opportunities/>},
      {path:'/roadmaps',element:<RoadMaps/>},
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
