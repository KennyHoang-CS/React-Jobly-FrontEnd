import React, { useState } from 'react';
import '../css/Search.css';

function Search({ setSearch, setSearchValues }) {
    
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
        setSearchValues(createSearchObject());
        setSearch(true);
        setFormData(INITIAL_STATE);
    }

    function createSearchObject() {
        
        let obj = {};
        
        for (const [key, value] of Object.entries(formData)) {
            if (value !== '') {
                obj[key] = value;
            }
        }

        return obj;
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

export default Search;