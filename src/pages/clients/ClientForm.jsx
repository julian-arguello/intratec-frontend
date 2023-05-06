import ClientFormAdd from "../../components/client/ClientFormAdd";
import ClientFormEdit from "../../components/client/ClientFormEdit";

export function ServiceAdd(props){
    
    return(
        <main>
            {!props.edit ? <h2 className="my-5 pt-5 pt-sm-0 text-center text-sm-start">Agregar Cliente</h2> : <h2 className="my-5 pt-5 pt-sm-0 text-center text-sm-start">Editar Cliente</h2>}
            {!props.edit ? <ClientFormAdd /> : <ClientFormEdit />}
        </main>
    )
}
export default ServiceAdd