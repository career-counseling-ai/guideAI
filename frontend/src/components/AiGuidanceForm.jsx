import { Form } from 'react-router-dom';

export async function AiForm({ request }) {
  const data = await Object.fromEntries(await request.formData());

  console.log(data);
  return null;
}

function AiGuidanceForm() {
  return (
    <div className="mt-20">
      <h1 className="text-textColor   text-center">
        Fill Out the Form Now!
        <br />
        <span className="text-xl ">
          Unlock Your Path to Success with Our AI-Powered Roadmap
        </span>
      </h1>
      <Form method="post" className="form" action="/guidance">
        {/* ------------------------------Personal Information------------------------ */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-md  "> Personal Information</p>
            {/* name */}

            <div className="form-row mt-3 ">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type="text"
                className="form-input"
                name="name"
                required
                defaultValue="john"
              />
            </div>

            {/* Lastname */}
            <div className="form-row mt-3">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                required
                className="form-input"
                name="lastName"
                defaultValue="smith"
              />
            </div>

            {/* contact */}
            <div className="form-row mt-3">
              <label htmlFor="email" className="form-label">
                Contact
              </label>

              <input
                id="contact"
                type="tel"
                required
                pattern="[0-9]{10}"
                maxLength="10"
                title="Ten digits code"
                placeholder="888 888 8888"
                className="form-input"
                name="contact"
                defaultValue="9876543221"
              />
            </div>
          </div>

          {/* -----------------------------Professional
        Background------------------------ */}
          <div>
            <p className="text-md"> Professional Background</p>
            {/* current_job */}

            <div className="form-row mt-3">
              <label htmlFor="name" className="form-label">
                Current Job Title or Role
              </label>
              <input
                type="text"
                className="form-input"
                name="current_job"
                required
                defaultValue="john"
              />
            </div>

            {/*      Current Employer */}
            <div className="form-row mt-3">
              <label htmlFor="lastName" className="form-label">
                Current Employer
              </label>
              <input
                id="lastName"
                type="text"
                required
                className="form-input"
                name="lastName"
                defaultValue="smith"
              />
            </div>

            {/*  Previous Relevant Experience */}
            <div className="form-row mt-3">
              <label htmlFor="email" className="form-label">
                Previous Relevant Experience
              </label>
              <input
                type="text"
                required
                className="form-input"
                name="previous_job "
                defaultValue="test@test.com"
              />
            </div>
          </div>

          {/* -----------------------------Educational Background------------------------ */}

          <div>
            <p className="text-md "> Educational Background</p>
            {/*      Highest Degree Attained */}

            <div className="form-row mt-3">
              <label htmlFor="name" className="form-label">
                Highest Degree Attained
              </label>
              <input
                type="text"
                className="form-input"
                name="highest_degree"
                required
                defaultValue="john"
              />
            </div>

            {/* Major/Field of Study
             */}
            <div className="form-row mt-3">
              <label htmlFor="lastName" className="form-label">
                Major/Field of Study
              </label>
              <input
                id="lastName"
                type="text"
                required
                className="form-input"
                name="major_field"
                defaultValue="smith"
              />
            </div>

            {/* Institutions Attended */}
            <div className="form-row mt-3">
              <label htmlFor="email" className="form-label">
                Institutions Attended
              </label>
              <input
                type="text"
                required
                className="form-input"
                name="institutions-attended"
                defaultValue="test@test.com"
              />
            </div>
          </div>

          {/* -----------------------------Work Experience------------------------ */}

          <div>
            <p className="text-md "> Work Experience</p>
            {/*      Work Experience */}

            <div className="form-row mt-3">
              <label htmlFor="name" className="form-label">
                Experience
              </label>
              <input
                type="text"
                className="form-input"
                name="work-experience"
                required
                defaultValue="john"
              />
            </div>
          </div>

          {/* -----------------------------Skills and Expertise----------------------- */}

          <div>
            <p className="text-md "> Skills and Expertise</p>
            {/*         Skills and Expertise */}

            <div className="form-row mt-3">
              <label htmlFor="name" className="form-label">
                Technical Skills
              </label>
              <input
                type="text"
                placeholder="e.g. programming languages, tools, frameworks"
                className="form-input"
                name="skills-and-expertise"
                required
                defaultValue="john"
              />
            </div>

            {/*     Soft Skills */}

            <div className="form-row mt-3">
              <label htmlFor="name" className="form-label">
                Soft Skills
              </label>
              <input
                type="text"
                placeholder="e.g., communication, leadership"
                className="form-input"
                name="soft-skills"
                required
                defaultValue="john"
              />
            </div>
          </div>

          {/* -----------------------------Learning Preferences----------------------- */}

          <div>
            <p className="text-md "> Learning Preferences</p>
            {/*      Preferred Learning Methods */}

            <div className="form-row mt-3">
              <label htmlFor="name" className="form-label">
                Preferred Learning Methods
              </label>
              <input
                type="text"
                placeholder="e.g. programming languages, tools, frameworks"
                className="form-input"
                name="preferred-learning-methods"
                required
                defaultValue="john"
              />
            </div>

            {/*    Time Commitment Available for Learning
             */}

            <div className="form-row mt-3">
              <label htmlFor="name" className="form-label">
                Time Commitment Available for Learning
              </label>
              <input
                type="text"
                placeholder="e.g., communication, leadership"
                className="form-input"
                name="time-commitment"
                required
                defaultValue="john"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-5 justify-center">
          <button type="submit" className="guidebtn">
            submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AiGuidanceForm;
