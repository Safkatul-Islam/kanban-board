function LoginPage() {

    return (
        <div className="login-page">
            <h1>Login to TaskMaster</h1>
            <form>
                <input type="email" placeholder="Enter Email" />
                <input type="password" placeholder="Enter Password"/>
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default LoginPage;