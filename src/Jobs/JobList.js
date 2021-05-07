import React, { useState, useEffect} from 'react';
import JoblyApi from '../API/api';
import JobSearch from '../Search/JobSearch';
import JobCard from './JobCard';


function JobList() {
    
    const [jobs, setJobs] = useState([]); 
    const [hasJobSearch, setJobSearch] = useState(false);
    const [searchJobValues, setSearchJobValues] = useState({});

    useEffect(() => {
        async function getJobsDataWithSearch() {
            let data = await JoblyApi.getJobsList(searchJobValues);
            setJobs(data);
        }
        getJobsDataWithSearch();
        setJobSearch(false);
    }, [hasJobSearch === true])

    useEffect(() => {
        async function getJobsDataWithoutSearch() {
            let data = await JoblyApi.getJobsList();
            setJobs(data);
        }
        getJobsDataWithoutSearch();
    }, [])

    return (
        <div className="Cards-Container">
            <JobSearch setJobSearch={setJobSearch} setSearchJobValues={setSearchJobValues}/>
            {jobs.map(j => <JobCard title={j.title} companyName={j.companyName} salary={j.salary} equity={j.equity} />)}
        </div>
    )
}

export default JobList;

