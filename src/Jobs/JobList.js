import React, { useState, useEffect} from 'react';
import JoblyApi from '../API/api';
import JobSearch from '../Search/JobSearch';
import JobCard from './JobCard';
import LoadingSpinner from '../MISC/LoadingSpinner';

function JobList() {
    
    const [jobs, setJobs] = useState([]); 
    const [hasJobSearch, setJobSearch] = useState(false);
    const [searchJobValues, setSearchJobValues] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getJobsDataWithSearch() {
            let data = await JoblyApi.getJobsList(searchJobValues);
            setIsLoading(false);
            setJobs(data);
        }
        getJobsDataWithSearch();
        setJobSearch(false);
    }, [hasJobSearch === true])

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

