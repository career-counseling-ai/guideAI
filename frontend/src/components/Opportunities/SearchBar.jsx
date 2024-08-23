
export default function SearchBar() {
  return (
    <div className="flex justify-center gap-4 my-10">
        <select className="w-54 py-3 pl-4 font-semibold rounded-md shadow-md">
            <option value="" disabled hidden selected>Job Role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Mobile Developer">Mobile Developer</option>
        </select>
        <select className="w-34 py-3 pl-4 font-semibold rounded-md shadow-md">
            <option value="" disabled hidden selected>Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
        </select>
        <select className="w-40 py-3 pl-4 font-semibold rounded-md shadow-md">
            <option value="" disabled hidden selected>Location</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="In-Office">In-Office</option>
        </select>
        <select className="w-56 py-3 pl-4 font-semibold rounded-md shadow-md">
            <option value="" disabled hidden selected>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
        </select>
        <button className="font-bold py-3 px-2 rounded-md bg-slate-300">Search</button>
    </div>
  )
}
