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
        {/* name */}
        <div className="form-row">
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
        <div className="form-row">
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
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            required
            className="form-input"
            name="email"
            defaultValue="test@test.com"
          />
        </div>

        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: '0.5rem' }}
        >
          submit
        </button>
      </Form>
    </div>
  );
}

export default AiGuidanceForm;
