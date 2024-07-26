export function authRole(state){
    switch(state){
        case "user":
            return "Administrativo";

        case "admin":
            return "Técnico";
        
        case "super_admin":
            return "Gerente";
        
        default:
            return "";
    }
}
export default authRole;