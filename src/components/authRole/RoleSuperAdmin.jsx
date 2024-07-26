import { useAuth } from "../../context/Auth.Context"

const RoleSuperAdmin = ({ children }) => {
    const { state } = useAuth()
    return(
        state.user.role.role_name === "super_admin" ? children : null 
    );
}
export { RoleSuperAdmin };