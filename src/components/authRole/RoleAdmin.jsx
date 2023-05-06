import { useAuth } from "../../context/Auth.Context"

function RoleAdmin({ children }){
    const { state } = useAuth()
    return(
        state.user.role.role_name === "admin" || state.user.role.role_name === "super_admin" ? children : null 
    );
}
export default RoleAdmin;