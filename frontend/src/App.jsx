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
import Hero from './components/Home/Hero';
import SuccessStory from './components/Home/SuccessStory';
import Testimonials from './components/Home/Testimonials';
import RoadMaps from './components/Roadmaps/RoadMaps';
import AiGuidanceForm, { AiForm } from './components/AiGuidanceForm';
import LandingAiForm from './components/LandingAiForm';

//Loader

//roadmaps
import ReactMap from './components/Roadmaps/ReactMap';
import JavaScriptMap from './components/Roadmaps/JavaScriptMap';

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
            <RoadMaps />
            <LandingAiForm />
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
