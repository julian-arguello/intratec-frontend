import { useAuth } from "../../context/Auth.Context"

function RoleSuperAdmid({ children }){
    const { state } = useAuth()
    return(
        state.user.role.role_name === "super_admin" ? children : null 
    );
}
export default RoleSuperAdmid;