export function stateClass(state) {
  switch (state) {
    case "Recepcionado":
      return "recepcionado";

    case "Revisado":
      return "revisado";

    case "Reparado":
      return "reparado";

    case "Sin reparación":
      return "sinReparacion";

    case "Devuelto":
      return "devuelto";

    default:
      return "";
  }
}

export function stateRoute(state) {
  switch (state) {
    case "recepcionado":
      return "Recepcionado";

    case "revisado":
      return "Revisado";

    case "reparado":
      return "Reparado";

    case "sin-reparacion":
      return "Sin reparación";

    case "devuelto":
      return "Devuelto";

    default:
      return "";
  }
}
