import JoblyApi from '../API/api'
import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import Search from '../Search/Search';
import '../css/CompanyList.css';

function CompanyList() {
    
    const [companies, setCompanies] = useState([]);
    const [hasSearch, setSearch] = useState(false);
    const [searchValues, setSearchValues] = useState({});
    
    
    useEffect(() => {
        async function getCompaniesData() {
            let data = await JoblyApi.getCompanyList(searchValues);
            setCompanies(data);
        }
        getCompaniesData();
        setSearch(false);
    }, [hasSearch])

    //debugger;

    return (
        <div className="Cards-Container">
            <Search setSearch={setSearch} setSearchValues={setSearchValues} />
            {companies.map(c => <CompanyCard name={c.name} description={c.description} logoUrl={c.logoUrl}/>)}
        </div>
    )
}

export default CompanyList;