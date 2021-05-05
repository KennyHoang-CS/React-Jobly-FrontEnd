import { Switch, Route } from "react-router";
import GuestPage from './GuestPage';
import LoginForm from './Authorization/LoginForm';
import SignUpForm from './Authorization/SignUpForm';
import Companies from './Companies/CompanyList';
import CompanyJobs from './Companies/CompanyJobs';
import JobList from './Jobs/JobList';
import EditProfile from './EditProfile';

function Routes({ login, signup }) {
    return (
        <Switch>
            <Route exact path="/">
                <GuestPage />
            </Route>
            <Route exact path="/login">
                <LoginForm login={login} />
            </Route>
            <Route exact path="/signup">
                <SignUpForm signup={signup} />
            </Route>
            <Route exact path="/companies">
                <Companies />
            </Route>
            <Route exact path="/companies/:handle">
                <CompanyJobs />
            </Route>
            <Route exact path="/jobs">
                <JobList />
            </Route>
            <Route exact path="/profile">
                <EditProfile />
            </Route>
        </Switch>
    )
}

export default Routes;