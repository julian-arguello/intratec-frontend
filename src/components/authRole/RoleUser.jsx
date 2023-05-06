import { useAuth } from "../../context/Auth.Context"

function RoleUser({ children }){
    const { state } = useAuth()
    return(
        state.user.role.role_name === "user" ? children : null 
    );
}
export default RoleUser;