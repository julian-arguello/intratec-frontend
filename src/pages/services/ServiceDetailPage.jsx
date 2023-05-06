import { ServiceDetail } from "../../components/service/ServiceDetail"
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { useService } from "../../context/Service.Context"
import Loading from "../../components/Loading";

export function ServiceDetailPage(){

  const [loading, setLoading] = useState(true)
  const { state, findServiceId } = useService()
  const {id} = useParams()

  useEffect(() => {
    findServiceId(id).then(() => setLoading(false))
  }, [])

  return( 
    <main>{loading ? <Loading /> : <ServiceDetail service={state.service}/>}</main>
  )    
}
export default ServiceDetailPage