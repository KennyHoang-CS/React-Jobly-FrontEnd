import JoblyApi from '../api'
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function CompanyList() {
    
    const [companies, setCompanies] = useState([]);

    useEffect(() => {

        async function getCompaniesData() {
            let data = await JoblyApi.getCompanyList();
            setCompanies(data);
        }
        console.log('useEffect() executing...')
        getCompaniesData();
        console.log(`companies is ${companies}`)
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default CompanyList;