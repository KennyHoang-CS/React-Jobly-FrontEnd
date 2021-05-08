import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../API/api';
import JobCard from '../Jobs/JobCard';
import "../css/CompanyJobs.css";

/** Display the company's list of jobs. */

function CompanyJobs() {
    
    const [companyJobs, setCompanyJobs] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [companyDesc, setCompanyDesc] = useState('');
    
    // get the company handle from params
    let { handle } = useParams();

    useEffect(() => {
        async function getCompanyJobs() {
            let data = await JoblyApi.getCompany(handle);
            setCompanyJobs(data.jobs);
            setCompanyDesc(data.description);
            setCompanyName(data.name);
        }
        getCompanyJobs();
    }, [handle])

    return (
        <div className="Cards-Container">
            <h2 className="Company-Name">{companyName}</h2>
            <h4 className="Company-Desc">{companyDesc}</h4>
            {companyJobs.map(cj => <JobCard salary={cj.salary} equity={cj.equity} title={cj.title} />)}
        </div>
    )
}

export default CompanyJobs;