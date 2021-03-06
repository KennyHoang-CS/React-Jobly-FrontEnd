import React, { useState } from 'react';
import '../css/JobCard.css';


function JobCard({ title, salary, equity, companyName }) {

    // The state to see if user has applied to that job or not. 
    const [hasApplied, setApplied] = useState(false);

    // The toggle to switch between 'APPLY' and 'APPLIED' for the job. 
    function applyToggle() {
        setApplied(hasApplied => !hasApplied);
    }

    return (
        <div className="Job-Container">
            <div className="Job-Card">
                <div className="Job-Headers">
                    <h3 className="Job-Title">{title}</h3>
                    <h3>{companyName}</h3>
                </div>
                <div className="Job-Content">
                    <h5 className="Salary">Salary: {salary}</h5>
                    <h5 className="Equity">Equity: {equity}</h5>
                </div>
                <div className="Apply-Container">
                    {!hasApplied && 
                    <input onClick={applyToggle}
                        type="submit"
                        value="APPLY"
                    />
                    }
                    {hasApplied && 
                    <input onClick={applyToggle}
                        type="submit"
                        value="APPLIED"
                    />
                    }
                </div>
            </div>
        </div>
    )
}

export default JobCard;