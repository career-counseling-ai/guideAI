import React from 'react';
import FormImg from '../assets/AiForm.svg';
import { NavLink } from 'react-router-dom';

function LandingAiForm() {
  return (
    <div className="px-40  text-textColor text-center py-20">
      <h1 className="text-4xl ">
        {/* Unlock Your Path to Success with Our AI-Powered Roadmap */}
        Your personalized path to success, powered by AI
      </h1>
      <div className="flex mt-24 items-center justify-around">
        <img src={FormImg} className="w-[40rem]" alt="" />
        <div>
          <h2 className="text-3xl inline">
            Unlock your path to success today! Use our AI-Powered Roadmap and
            click{' '}
            <span>
              <button className="px-2 py-1 text-2xl rounded-md text-white bg-highLight ">
                <NavLink to="/guidance">The Form</NavLink>
              </button>
            </span>{' '}
            to get started.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default LandingAiForm;
