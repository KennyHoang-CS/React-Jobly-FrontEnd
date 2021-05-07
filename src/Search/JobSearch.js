import React, { useState } from 'react';
import '../css/Search.css';
import createSearchObject from './helper';

function JobSearch({ setJobSearch, setSearchJobValues}) {
    const INITIAL_STATE = {
        minSalary: '',
        title: '',
        hasEquity: '' 
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
        setSearchJobValues(createSearchObject(formData));
        setJobSearch(true);
        setFormData(INITIAL_STATE);
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
                placeholder="(Optional) Enter a positive number to search by equity.."
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