import JoblyApi from '../API/api'
import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import CompanySearch from '../Search/CompanySearch';
import LoadingSpinner from '../MISC/LoadingSpinner';
import '../css/CompanyList.css';

function CompanyList() {
    
    // The state to hold the list of companies. 
    const [companies, setCompanies] = useState([]);
    
    // The state to determine if user is searching for companies.
    // True >> they are searching by filters
    // False >> they are searching without filters.  
    const [hasCompanySearch, setCompanySearch] = useState(false);
    
    // The state to hold company search filters. 
    const [searchCompanyValues, setCompanySearchValues] = useState({});
    
    // The loading spinner to display if company list is still being retrieved from server. 
    const [isLoading, setIsLoading] = useState(true);
    
    // User wants to search, so use this effect. 
    useEffect(() => {
        async function getCompaniesDataWithSearch() {
            let data = await JoblyApi.getCompanyList(searchCompanyValues);
            setIsLoading(false);
            setCompanies(data);
        }
        getCompaniesDataWithSearch();
        setCompanySearch(false);
    }, [hasCompanySearch === true])

    // User doesn't want to search, so use this effect. 
    useEffect(() => {
        async function getCompaniesDataWithoutSearch() {
            let data = await JoblyApi.getCompanyList();
            setIsLoading(false);
            setCompanies(data);
        }
        getCompaniesDataWithoutSearch();
    }, [])

    return (
        <div className="Cards-Container">
            <CompanySearch setCompanySearch={setCompanySearch} setCompanySearchValues={setCompanySearchValues}/>
            {isLoading && <LoadingSpinner />}
            {companies.map(c => <CompanyCard key={c.handle} name={c.name} handle={c.handle} description={c.description} logoUrl={c.logoUrl}/>)}
        </div>
    )
}

export default CompanyList;