import React, { useState, useEffect } from 'react';
import JoblyApi from '../API/api';
import Search from '../Search/Search';
import JobCard from './JobCard';


function JobList() {
    
    const [jobs, setJobs] = useState([]); 
    
    useEffect(() => {
        async function getJobsData() {
            let data = await JoblyApi.getJobsList();
            setJobs(data);
        }
        getJobsData();
    }, [])

   //useEffect(() => console.log(jobs), jobs);

    return (
        <div className="Cards-Container">
            <Search />
            {/*jobs.map(c => <p>{JSON.stringify(c.title)}</p>)*/}
            {jobs.map(j => <JobCard title={j.title} companyName={j.companyName} salary={j.salary} equity={j.equity} />)}
        </div>
    )
}

export default JobList;

