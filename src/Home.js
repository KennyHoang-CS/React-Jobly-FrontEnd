import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar';
import Routes from './Routes';

function Home() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes />
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