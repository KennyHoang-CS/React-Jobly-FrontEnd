import '../css/CompanyCard.css';
import { NavLink } from 'react-router-dom';

function CompanyCard({ name, handle, description, logoUrl }) {
    return (
        <NavLink exact to={`companies/${handle}`} className="Company-Link">
            <div className="Company-Card">
                <div className="Company-Content">
                    <div className="Company-Header">
                        <h3>{name}</h3>
                        {logoUrl && <img src={logoUrl} ></img>}
                    </div>
                    <h5 className="Company-Footer">{description}</h5>
                </div>
            </div>
        </NavLink>
    )
}

export default CompanyCard;