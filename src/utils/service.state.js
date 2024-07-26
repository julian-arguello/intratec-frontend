export function stateClass(state){
    switch(state){
        case "Recepcionado":
            return "recepcionado";

        case "Revisado":
            return "revisado";
        
        case "Reparado":
            return "reparado";
        
        case "Sin reparación":
            return "sinReparacion";

        default:
            return "";
    }
}

export function stateRoute(state){
    switch(state){
        case "recepcionado":
            return "Recepcionado";

        case "revisado":
            return "Revisado";
        
        case "reparado":
            return "Reparado";
        
        case "sin-reparacion":
            return "Sin reparación";

        default:
            return "";
    }
}

export function stateIcon(state) {
    switch(state) {
        case "Recepcionado":
            return "icon-recepcionado";

        case "Revisado":
            return "icon-revisado";
        
        case "Reparado":
            return "icon-reparado";
        
        case "Sin reparación":
            return "icon-irreparable";
    }
}    


