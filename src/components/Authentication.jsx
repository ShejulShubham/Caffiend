import { useState } from "react"
import { useAuth } from "../context/AuthContext";

export default function Authentication(props) {
    const { handleCloseModal } = props;

    const [isRegistration, setIsRegistration] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassoword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [error, setError] = useState(null)

    const { signup, login } = useAuth();

    async function handleAuthenticate() {
        if (!email || !email.includes('@') ||
            !password || password.length < 6 || isAuthenticating) {
            return
        }

        try {
            setIsAuthenticating(true)
            setError(null)

            if (isRegistration) {
                // register a user
                await signup(email, password)
            } else {
                // log in user
                await login(email, password)
            }

            handleCloseModal()
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        } finally {
            setIsAuthenticating(false)
        }

    }

    return (
        <>
            <h2 className="sign-up-text">{isRegistration ? 'Sign Up' : 'Login'}</h2>
            <p>{isRegistration ? 'Create an account' : 'Sign in to your account!'}</p>
            {error && (
                <p>ERROR: {error}</p>
            )}
            <input value={email} onChange={(e) => { setEmail(e.target.value) }}
                placeholder="Email" type="email" />
            <input value={password} onChange={(e) => { setPassoword(e.target.value) }}
                placeholder="********" type="password" />
            <button onClick={handleAuthenticate}><p>
                {isAuthenticating ? 'Authenticating...' : 'Submit'}
            </p></button>
            <hr />
            <div className="register-content">
                <p>{isRegistration ? 'Already have an account?'
                    :
                    'Don\'t have an account?'}</p>
                <button onClick={() => {
                    setIsRegistration(!isRegistration)
                }}><p>
                        {isRegistration ? 'Sign in' : 'Sign up'}</p>
                </button>
            </div>
        </>
    )
}