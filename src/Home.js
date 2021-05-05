import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar';
import Routes from './Routes';

function Home({ login, signup }) {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes login={login} signup={signup} />
            {/*
            <SignUpForm />
            <LoginForm /> 
            <GuestPage />
            <Routes />
            */}
        </BrowserRouter>  
    )
}

export default Home; 