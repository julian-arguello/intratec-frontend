export function stateClass(state){
    switch(state){
        case "Recepcionado":
            return "box-recepcionados";

        case "Revisado":
            return "box-proceso";
        
        case "Reparado":
            return "box-reparados";
        
        case "Sin reparación":
            return "box-sinreparacion";

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


