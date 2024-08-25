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
        <div className="grid grid-cols-3  gap-3">
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
                type="text"
                required
                className="form-input"
                name="lastName"
                defaultValue="smith"
              />
            </div>

            {/* contact */}
            <div className="form-row mt-3">
              <label htmlFor="contact" className="form-label">
                Contact
              </label>

              <input
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

          {/* -----------------------------Professional Background------------------------ */}
          <div>
            <p className="text-md"> Professional Background</p>
            {/* current_job */}

            <div className="form-row mt-3">
              <label htmlFor="current_job" className="form-label">
                Current/Previous Job Title
              </label>
              <input
                type="text"
                className="form-input"
                name="current_job"
                required
                defaultValue="Sr. React Developer"
              />
            </div>

            {/* Current Company */}
            <div className="form-row mt-3">
              <label htmlFor="current_company" className="form-label">
                Current Company
              </label>
              <input
                type="text"
                required
                className="form-input"
                name="current_company"
                defaultValue="ABC LTD. PVT."
              />
            </div>

            {/*  Previous Relevant Experience */}
            <div className="form-row mt-3">
              <label htmlFor="experience" className="form-label">
                Relevant Experience
              </label>
              <input
                type="number"
                required
                pattern="[0-9]"
                min="0"
                onInput={(e) => {
                  if (!e.target.validity.valid) {
                    e.target.value = '';
                  }
                }}
                maxLength="2"
                className="form-input"
                name="experience"
                defaultValue="2"
              />
            </div>
          </div>

          {/* -----------------------------Educational Background------------------------ */}

          <div>
            <p className="text-md "> Educational Background</p>
            {/*      Highest Degree Attained */}

            <div className="form-row mt-3">
              <label htmlFor="highest_degree" className="form-label">
                Highest Degree Attained
              </label>
              <input
                type="text"
                className="form-input"
                name="highest_degree"
                required
                defaultValue="B.Tech"
              />
            </div>

            {/* Major/Field of Study*/}
            <div className="form-row mt-3">
              <label htmlFor="major_field" className="form-label">
                Major/Field of Study
              </label>
              <input
                type="text"
                required
                className="form-input"
                name="major_field"
                defaultValue="Computer Science"
              />
            </div>

            {/* Institutions Attended */}
            <div className="form-row mt-3">
              <label htmlFor="institutions_attended" className="form-label">
                Institutions Attended
              </label>
              <input
                type="text"
                required
                className="form-input"
                name="institutions_attended"
                defaultValue="University of Mumbai"
              />
            </div>
          </div>

          {/* -----------------------------Skills and Expertise----------------------- */}

          <div>
            <p className="text-md "> Skills and Expertise</p>
            {/*         Skills and Expertise */}

            <div className="form-row mt-3">
              <label htmlFor="skills_and_expertise" className="form-label">
                Technical Skills
              </label>
              <input
                type="text"
                placeholder="e.g. programming languages, tools, frameworks"
                name="skills_and_expertise"
                required
                className="form-input"
                defaultValue="React,JavaScript"
              />
            </div>

            {/*     Soft Skills */}

            <div className="form-row mt-3">
              <label htmlFor="soft_skills" className="form-label">
                Soft Skills
              </label>
              <input
                type="text"
                placeholder="e.g., communication, leadership"
                className="form-input"
                name="soft_skills"
                required
                defaultValue="communication"
              />
            </div>
          </div>

          {/* -----------------------------Learning Preferences----------------------- */}

          <div>
            <p className="text-md "> Learning Preferences</p>
            {/*      Preferred Learning Methods */}

            <div className="form-row mt-3">
              <label
                htmlFor="preferred_learning_methods"
                className="form-label"
              >
                Preferred Learning Methods
              </label>
              <input
                type="text"
                placeholder="e.g. online courses, hands-on projects"
                className="form-input"
                name="preferred_learning_methods"
                required
                defaultValue="hands-on projects"
              />
            </div>

            {/*    Time Commitment Available for Learning
             */}

            <div className="form-row mt-3">
              <label htmlFor="time_commitment" className="form-label">
                Time Commitment Available for Learning(months)
              </label>
              <input
                type="number"
                required
                pattern="[0-9]"
                min="0"
                onInput={(e) => {
                  if (!e.target.validity.valid) {
                    e.target.value = '';
                  }
                }}
                maxLength="2"
                placeholder="e.g. 1,4,12"
                className="form-input"
                name="time_commitment"
                defaultValue="4"
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

/* -----------------------------Work Experience------------------------ */

{
  /* <div>
  <p className="text-md "> Work Experience</p>
 //// Work Experience
  <div className="form-row mt-3">
    <label htmlFor="experience" className="form-label">
      Experience
    </label>
    <input
      type="number"
      required
      onInput="validateInput()"
      pattern="[0-9]"
      min="0"
      oninput="validity.valid||(value='');"
      maxLength="2"
      className="form-input"
      name="experience"
      defaultValue="2"
    />
  </div>
</div>; */
}