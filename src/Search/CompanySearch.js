import React, { useState } from 'react';
import '../css/Search.css';
import createSearchObject from './helper';

function CompanySearch({ setCompanySearch, setCompanySearchValues }) {
    
    const INITIAL_STATE = {
        name: '',
        maxEmployees: '',
        minEmployees: '' 
    }
    
    const [formData, setFormData] = useState(INITIAL_STATE);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCompanySearchValues(createSearchObject(formData));
        setCompanySearch(true);
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="Search" onSubmit={handleSubmit}>
            <label className="Company-Label">Company Name</label>
            <input className="Search-Input"
                type="text"
                name="name"
                placeholder="(Optional) Search by company name.."
                onChange={handleChange}
                value={formData.name}
            />
            <label>Max Employee</label>
            <input className="Search-Input"
                type="text"
                name="maxEmployees"
                placeholder="(Optional) Search by max employees.."
                onChange={handleChange}
                value={formData.maxEmployees}
            />
            <label>Min Employee</label>
            <input className="Search-Input"
                type="text"
                name="minEmployees"
                placeholder="(Optional) Search by min employees.."
                onChange={handleChange}
                value={formData.minEmployees}
            />

            <input className="Search-Submit"
                type="submit"
                value="Submit"
            />
        </form>
    )
}

export default CompanySearch;