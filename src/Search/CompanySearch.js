import React, { useState } from 'react';
import '../css/Search.css';
import createSearchObject from './helper';

function CompanySearch({ setCompanySearch, setCompanySearchValues }) {
    
    // State to hold company search filters. 
    const INITIAL_STATE = {
        name: '',
        maxEmployees: '',
        minEmployees: '' 
    }
    
    // State to hold form data. 
    const [formData, setFormData] = useState(INITIAL_STATE);

    // To change the form data state. 
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    // To handle company search form submission. 
    function handleSubmit(e) {
        e.preventDefault();
        // Create the object of search filters.
        setCompanySearchValues(createSearchObject(formData));
        // User wants to search by filters, so change search state >> TRUE 
        setCompanySearch(true); 
        // Reset form data back to initial default values. 
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