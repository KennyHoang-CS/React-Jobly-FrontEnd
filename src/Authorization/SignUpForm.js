import '../css/Form.css';

function SignUpForm({ signup }) {
    
    return (
        <div className="Form-Container">
            <h1>Sign Up</h1>
            <form className="Form" onSubmit={signup}>
                <div className="inputs-container">
                    <label htmlFor="username">Username</label>
                    <input className="input"
                        id="username"
                        name="username"
                        type="text"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                    />
                    <label htmlFor="fname">First Name</label>
                    <input
                        id="fname"
                        name="fname"
                        type="text"
                    />
                    <label htmlFor="lname">Last Name</label>
                    <input
                        id="lname"
                        name="lname"
                        type="text"
                    />
                    <label htmlFor="fname">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;