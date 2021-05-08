import React, { useState } from 'react';
import '../css/Search.css';
import createSearchObject from './helper';


function JobSearch({ setJobSearch, setSearchJobValues}) {
    
    // The state to hold default job search field values. 
    const INITIAL_STATE = {
        minSalary: '',
        title: '',
        hasEquity: '' 
    }

    // State to hold form data. 
    const [formData, setFormData] = useState(INITIAL_STATE);

    // To change the state of form data. 
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    // To handle submission of job searches form. 
    function handleSubmit(e) {
        e.preventDefault();
        // Create object of search filters, if there is any. 
        setSearchJobValues(createSearchObject(formData));
        setJobSearch(true);     // user wants to search, so job search status >> TRUE. 
        setFormData(INITIAL_STATE); // reset back to initial search form state. 
    }
    
    return (
        <form className="Search" onSubmit={handleSubmit}>
            
            <label className="Company-Label">Job Title</label>
            <input className="Search-Input"
                type="text"
                name="title"
                placeholder="(Optional) Search by job title.."
                onChange={handleChange}
                value={formData.title}
            />
            
            <label>Min Salary</label>
            <input className="Search-Input"
                type="text"
                name="minSalary"
                placeholder="(Optional) Search by min salary.."
                onChange={handleChange}
                value={formData.minSalary}
            />
            
            <label>Equity</label>
            <input className="Search-Input"
                type="text"
                name="hasEquity"
                placeholder="(Optional) Enter a positive number to search jobs with equity.."
                onChange={handleChange}
                value={formData.hasEquity}
            />

            <input className="Search-Submit"
                type="submit"
                value="Submit"
            />
            
        </form>
    )
}

export default JobSearch;