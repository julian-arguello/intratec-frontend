import ClientDetail from '../../components/client/ClientDetail';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { useClient } from "../../context/Client.Context"
import Loading from "../../components/Loading";

export function ClientDetailPage(){

  const [loading, setLoading] = useState(true)
  const { state, findClientId } = useClient()
  const {id} = useParams()

  useEffect(() => {
    findClientId(id).then(() => setLoading(false))
  }, [])

  return( 
    <main>{loading ? <Loading /> : <ClientDetail client={state.client}/>}</main>
  )    
}
export default ClientDetailPage