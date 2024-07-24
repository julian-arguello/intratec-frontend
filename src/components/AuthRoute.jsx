import { useAuth } from "../context/Auth.Context"
import { Navigate } from 'react-router-dom'


function AuthRoute({ children }){
    const { state } = useAuth()
    return(        
        state.isAuth ? children : <Navigate to="/" />
    );
}

export default AuthRoute;