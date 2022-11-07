import React from 'react'

import LoginForm from '../LogInForm';
import Home from './Home';


export const AuthContext = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            // localStorage.setItem("userEmail", JSON.stringify(action.payload.email));
            // localStorage.setItem("userCredential", JSON.stringify(action.payload));
            // localStorage.setItem("accessToken", JSON.stringify(action.payload.accessToken));
            localStorage.setItem("userAdminEmail", JSON.stringify(action.payload.user));
            localStorage.setItem("userAdminCredential", JSON.stringify(action.payload));
            localStorage.setItem("userAdminAccessToken", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.email,
                token: action.payload.accessToken,
                displayName: action.payload.displayName
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                displayName: null
            };
        default:
            return state;
    }
};


function LoginAdmin() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const formTitle = "Admin";

    var initialState = React.useRef({
        isAuthenticated: false,
        user: null,
        token: null,
        displayName: null,
    });

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        let data = JSON.parse(localStorage.getItem('userAdminCredential'));
        if (data) {
            dispatch({
                type: 'LOGIN', payload: {
                    isAuthenticated: true,
                    user: data.email,
                    token: data.accessToken,
                    displayName: data.displayName
                }
            });
        }

    }, [])

    const authenticateUser = () => {

        //code to call API and Authenticate user

        // temporary Code for testing
        dispatch({
            type: 'LOGIN', payload: {
                isAuthenticated: true,
                user: "pushpa.birha@raisoni.net",
                token: "ABCD1234",
                displayName: "Pushpa Birha"
            }
        })
    }



    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {/* <div>
                <LoginForm props={{ formTitle, email, password, setEmail, setPassword, authenticateUser }} />
            </div> */}
            <div>
                {!state.isAuthenticated ? <LoginForm props={{ formTitle, email, password, setEmail, setPassword, authenticateUser }} />
                    : <Home />
                }
            </div>
        </AuthContext.Provider >
    )
}

export default LoginAdmin