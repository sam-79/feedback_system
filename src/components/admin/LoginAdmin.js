import React from 'react'

import LoginForm from '../LogInForm';
import Home from './Home';
import LoadingScreen from '../LoadingScreen';


export const AuthContext = React.createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            // localStorage.setItem("userEmail", JSON.stringify(action.payload.email));
            // localStorage.setItem("userCredential", JSON.stringify(action.payload));
            // localStorage.setItem("accessToken", JSON.stringify(action.payload.accessToken));
            console.log(action.payload)
            localStorage.clear();
            localStorage.setItem("userAdminEmail", JSON.stringify(action.payload.user.email));
            localStorage.setItem("userAdminCredential", JSON.stringify(action.payload));
            localStorage.setItem("userAdminAccessToken", JSON.stringify(action.payload.jwt));
            return {
                ...state,
                isAuthenticated: true,
                email: action.payload.user.email,
                jwt: action.payload.jwt,
                displayName: action.payload.user.displayName,
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                email: null,
                jwt: null,
                displayName: null
            };
        default:
            return state;
    }
};


function LoginAdmin() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false)
    const formTitle = "Admin";

    var initialState = React.useRef({
        isAuthenticated: false,
        email: null,
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
                    ...data
                }
            });
        }

    }, [])

    const authenticateUser = () => {

        setIsLoading(true)
        //code to call API and Authenticate user

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "identifier": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/auth/local`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    response.json().then((result => {
                        setIsLoading(false)
                        dispatch({
                            type: 'LOGIN', payload: {
                                isAuthenticated: true,
                                ...result
                            }
                        })
                    }))

                } else {
                    response.json().then((err => {
                        setIsLoading(false)
                        alert(err.error.message)

                    }))
                }
            })
            .catch(err=>{
                setIsLoading(false)
                alert(err.err)

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
            <LoadingScreen animating={isLoading} />
            <div>
                {!state.isAuthenticated ? <LoginForm props={{ formTitle, email, password, setEmail, setPassword, authenticateUser }} />
                    : <Home />
                }
            </div>
        </AuthContext.Provider >
    )
}

export default LoginAdmin