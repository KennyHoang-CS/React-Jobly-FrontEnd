import React, { useState, useEffect} from 'react';
import JoblyApi from '../API/api';
import JobSearch from '../Search/JobSearch';
import JobCard from './JobCard';
import LoadingSpinner from '../MISC/LoadingSpinner';

function JobList() {
    
    // The state to hold list of jobs. 
    const [jobs, setJobs] = useState([]); 

    // The state if user is searching jobs by filters. 
    const [hasJobSearch, setJobSearch] = useState(false);

    // The state to hold users' jobs' search filters. 
    const [searchJobValues, setSearchJobValues] = useState({});
    
    // Loading spinner state to determine if jobs data is still being retrieved. 
    const [isLoading, setIsLoading] = useState(true);

    // User wants to search for jobs using filters, so use this effect. 
    useEffect(() => {
        async function getJobsDataWithSearch() {
            let data = await JoblyApi.getJobsList(searchJobValues);
            setIsLoading(false);
            setJobs(data);
        }
        getJobsDataWithSearch();
        setJobSearch(false);
    }, [hasJobSearch === true])

    // User wants to search for jobs without filters, so use this effect. 
    useEffect(() => {
        async function getJobsDataWithoutSearch() {
            let data = await JoblyApi.getJobsList();
            setIsLoading(false);
            setJobs(data);
        }
        getJobsDataWithoutSearch();
    }, [])

    return (
        <div className="Cards-Container">
            <JobSearch setJobSearch={setJobSearch} setSearchJobValues={setSearchJobValues}/>
            {isLoading && <LoadingSpinner />}
            {jobs.map(j => <JobCard key={j.id} title={j.title} companyName={j.companyName} salary={j.salary} equity={j.equity} />)}
        </div>
    )
}

export default JobList;

