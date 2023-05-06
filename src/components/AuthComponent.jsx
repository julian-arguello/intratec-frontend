import { useAuth } from "../context/Auth.Context"

function AuthComponent({ children }){
    const { state } = useAuth()
    return(
        state.isAuth ? children : null 
    );
}
export default AuthComponent;