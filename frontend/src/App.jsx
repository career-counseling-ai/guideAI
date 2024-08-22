import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//page
import {
  Guidance,
  Opportunities,
  Mentorship,
  Error,
  SinglePageError,
} from './pages/index';

//Component

import HomeLayout from './pages/HomeLayout';
import Hero from './components/Hero';
import SuccessStory from './components/SuccessStory';
import Testimonials from './components/Testimonials';
import RoadMaps from './components/RoadMaps';
import AiGuidance from './components/AiGuidance';
import PopularRoadmaps from './components/PopularRoadmaps';


//roadmaps
import JavaScriptMap from './components/Roadmaps/Maps/JavaScriptMap'
import ReactMap from './components/Roadmaps/Maps/ReactMap'
import DummyMap from './components/Roadmaps/Maps/DummyMap'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: 'hero',
        errorElement: <SinglePageError />,
        element: (
          <>
            <Hero />
            <PopularRoadmaps/>
            <AiGuidance />
            <SuccessStory />
            <Testimonials />
          </>
        ),
      },

      {
        path: 'guidance',
        errorElement: <SinglePageError />,
        element: <Guidance />,
      },

      {
        path: 'explore/opportunities',
        errorElement: <SinglePageError />,
        element: <Opportunities />,
      },

      {
        path: 'explore/roadmaps',
        errorElement: <SinglePageError />,
        element: <RoadMaps />,
        children:[
          {
            path:'html-roadmap',
            element:<DummyMap/>
          },
          {
            path:'css-roadmap',
            element:<DummyMap/>
          },
          {
            path:'js-roadmap',
            element:<JavaScriptMap/>
          },
          {
            path:'react-roadmap',
            element:<ReactMap/>
          }

        ]
      },
      {
        path: 'mentorship',
        errorElement: <SinglePageError />,
        element: <Mentorship />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//  children: [
//       { path: '/', element: <Home /> },
//       { path: '/guidance', element: <Guidance /> },
//       { path: '/explore/opportunities', element: <Opportunities /> },
//       { path: '/explore/roadmaps', element: <RoadMaps /> },
//       { path: '/mentorship', element: <Mentorship /> },
//     ],
