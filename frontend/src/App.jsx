import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//page
import {
  Opportunities,
  Mentorship,
  Error,
  SinglePageError,
} from './pages/index';

//Component

import HomeLayout from './pages/HomeLayout';
import Hero from './components/Home/Hero'
import SuccessStory from './components/Home/SuccessStory';
import Testimonials from './components/Home/Testimonials';
import RoadMaps from './components/Roadmaps/RoadMaps'
import LandingRoadMaps from './components/Home/LandingRoadMaps';

import AiGuidanceForm, { AiForm } from './components/AiForm/AiGuidanceForm'
import LandingAiForm from './components/Home/LandingAiForm';

//Loader

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
        index: true,
        errorElement: <SinglePageError />,
        element: (
          <>
            <Hero />
            <LandingRoadMaps/>
            <LandingAiForm/>
            <SuccessStory />
            <Testimonials />
          </>
        ),
      },

      {
        path: 'guidance',
        errorElement: <SinglePageError />,
        element: <AiGuidanceForm />,
        action: AiForm,
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
