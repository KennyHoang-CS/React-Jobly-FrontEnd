import { Switch, Route } from "react-router";
import GuestPage from './GuestPage';
import LoginForm from './Authorization/LoginForm';
import SignUpForm from './Authorization/SignUpForm';
import Companies from './Companies/CompanyList';
import FilterCompanies from './Companies/FilterCompanies';
import Jobs from './Jobs/Jobs';
import EditProfile from './EditProfile';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <GuestPage />
            </Route>
            <Route exact path="/login">
                <LoginForm />
            </Route>
            <Route exact path="/signup">
                <SignUpForm />
            </Route>
            <Route exact path="/companies">
                <Companies />
            </Route>
            <Route exact path="/companies/:code">
                <FilterCompanies />
            </Route>
            <Route exact path="/jobs">
                <Jobs />
            </Route>
            <Route exact path="/profile">
                <EditProfile />
            </Route>
        </Switch>
    )
}

export default Routes;