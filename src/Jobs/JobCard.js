import '../css/JobCard.css';

function JobCard({ title, salary, equity, companyName }) {
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
                    <input 
                        type="submit"
                        value="APPLY"
                    />
                </div>
            </div>
        </div>
    )
}

export default JobCard;