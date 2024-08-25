import JobCard from "../components/Opportunities/JobCard"
import SearchBar from "../components/Opportunities/SearchBar"
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import jobData from '../utils/CompanyListing';

export default function Opportunities() {

  // const [company,setCompany] = useState([])

  // useEffect(()=>{
  //   axios.get('http://localhost:3001/explore/opportunities')
  //   .then(company => setCompany(company.data))
  //   .catch(err=>console.log(err))
  // },[])

  return (
    <div>
      <SearchBar/>
      {jobData.map((job)=>(
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  )
}
