import '../css/Form.css';

function LoginForm({ login }) {
    return (
        <div className="Form-Container">
            <h1>Log in</h1>
            <form className="Form" onSubmit={login}>
                <div className="inputs-container">
                    <label>Username</label>
                    <input className="input"
                        id="username"
                        name="username"
                        type="text"
                    />
                    <label>Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;