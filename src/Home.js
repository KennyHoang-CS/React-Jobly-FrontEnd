import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar';
import Routes from './Routes';

function Home() {
    return (
        <>
            <NavBar />
            <Routes />
            {/*
            <SignUpForm />
            <LoginForm /> 
            <GuestPage />
            <Routes />
            */}
        </>  
    )
}

export default Home; 