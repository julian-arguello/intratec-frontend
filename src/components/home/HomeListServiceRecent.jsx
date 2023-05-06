import { useService } from '../../context/Service.Context';
import ServiceItem from '../service/ServiceItem';
import imagenes from '../../assets/images';

export function HomeListServiceRecent(){

    const { state } = useService()
    return(
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 gy-5 gx-0 gx-sm-5">
            {state.serviceRecent.map((service)=>(
                <ServiceItem key={service._id} service={service}/>
            ))}
        </div>
    )
}
export default HomeListServiceRecent