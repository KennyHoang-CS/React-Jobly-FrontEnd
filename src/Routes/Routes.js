import { Switch, Route } from "react-router";
import HomePage from '../Home/HomePage';
import LoginForm from '../Authorization/LoginForm';
import Companies from '../Companies/CompanyList';
import CompanyJobs from '../Companies/CompanyJobs';
import JobList from '../Jobs/JobList';
import UserForm from "../Authorization/UserForm";
import { useContext } from "react";
import userContext from "../Context/userContext";


function Routes() {
    
    // token is used to protect routes, which would require a user to be logged in
    //  first before accessing those routes. 
    const { token } = useContext(userContext);

    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/login">
                <LoginForm />
            </Route>
            <Route exact path="/signup">
                <UserForm />
            </Route>
            <Route exact path="/companies">
                {token && <Companies />}
                {!token && <HomePage />}
            </Route>
            <Route exact path="/companies/:handle">
                {token && <CompanyJobs />}
                {!token && <HomePage />}
            </Route>
            <Route exact path="/jobs">
                {token && <JobList />}
                {!token && <HomePage />}
            </Route>
            <Route exact path="/profile">
                {token && <UserForm />}
                {!token && <HomePage />}
            </Route>
        </Switch>
    )
}

export default Routes;