import { useService } from '../../context/Service.Context';

export function HomeStatistics(){

    const { state } = useService()
    return(
        <div className="container-fluid mb-5">
            <div className="row gy-4 text-white">
                <div className="col-12 col-md-6 col-xl-3 ps-xl-0">
                    <div className='box-recepcionados p-4 rounded-4'>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <p className="h3"><strong>{state.statistics.recepcionado}</strong></p>
                            <span className="icon-recepcionado f-30"></span>
                        </div>
                        <p className="m-0"><strong>Recepcionados</strong></p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                    <div className='box-proceso p-4 rounded-4'>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <p className="h3"><strong>{state.statistics.revisado}</strong></p>
                            <span className="icon-revisado f-30"></span>
                        </div>
                        <p className="m-0"><strong>Revisados</strong></p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                    <div className='box-reparados p-4 rounded-4'>
                        <div  className="d-flex justify-content-between align-items-center mb-3">
                            <p className="h3"><strong>{state.statistics.reparado}</strong></p>
                            <span className="icon-reparado f-30"></span>
                        </div>
                        <p className="m-0"><strong>Reparados</strong></p>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3 pe-xl-0">
                    <div className='box-sinreparacion p-4 rounded-4'>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <p className="h3"><strong>{state.statistics.sin_reparacion}</strong></p>
                            <span className="icon-irreparable f-30"></span>
                        </div>
                        <p className="m-0"><strong>Sin Reparación </strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeStatistics