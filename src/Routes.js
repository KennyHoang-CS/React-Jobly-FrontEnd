import { Switch, Route } from "react-router";
import GuestPage from './GuestPage';
import LoginForm from './Authorization/LoginForm';
import Companies from './Companies/CompanyList';
import CompanyJobs from './Companies/CompanyJobs';
import JobList from './Jobs/JobList';
import UserForm from "./Authorization/UserForm";
import { useContext } from "react";
import userContext from "./userContext";


function Routes() {
    
    const { token } = useContext(userContext);

    return (
        <Switch>
            <Route exact path="/">
                <GuestPage />
            </Route>
            <Route exact path="/login">
                <LoginForm />
            </Route>
            <Route exact path="/signup">
                <UserForm />
            </Route>
            <Route exact path="/companies">
                {token && <Companies />}
                {!token && <GuestPage />}
            </Route>
            <Route exact path="/companies/:handle">
                {token && <CompanyJobs />}
                {!token && <GuestPage />}
            </Route>
            <Route exact path="/jobs">
                {token && <JobList />}
                {!token && <GuestPage />}
            </Route>
            <Route exact path="/profile">
                {token && <UserForm />}
                {!token && <GuestPage />}
            </Route>
        </Switch>
    )
}

export default Routes;