import JoblyApi from '../API/api'
import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import CompanySearch from '../Search/CompanySearch';
import LoadingSpinner from '../MISC/LoadingSpinner';
import '../css/CompanyList.css';

function CompanyList() {
    
    const [companies, setCompanies] = useState([]);
    const [hasCompanySearch, setCompanySearch] = useState(false);
    const [searchCompanyValues, setCompanySearchValues] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        async function getCompaniesDataWithSearch() {
            let data = await JoblyApi.getCompanyList(searchCompanyValues);
            setIsLoading(false);
            setCompanies(data);
        }
        getCompaniesDataWithSearch();
        setCompanySearch(false);
    }, [hasCompanySearch === true])

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