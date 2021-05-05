import '../css/CompanyCard.css';

function CompanyCard({name, description, logoUrl}) {
    return (
        <div className="Company-Card">
        <div className="Company-Content">
            <div className="Company-Header">
                <h3>{name}</h3>
                {logoUrl && <img src={logoUrl} ></img>}
            </div>
            <h5 className="Company-Footer">{description}</h5>
        </div>
        </div>
    )
}

export default CompanyCard;