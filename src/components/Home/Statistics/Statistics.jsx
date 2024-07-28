import { useEffect, useState } from "react";
import { CardStatistic } from "./CardStatistic/CardStatistic";
import { useService } from "../../../context/Service.Context";
import { Loader } from "../../UI/Loader/Loader"
import styles from "./Statistics.module.scss"

const Statistics = ({className}) => {
  const { state, findStatistics } = useService();
  const [loadingStatistics, setloadingStatistics] = useState(true);

  useEffect(() => {
    findStatistics().then(() => setloadingStatistics(false));
  }, []);

  return (

     !loadingStatistics ? 
      <div className={`${styles.statisticsBox} ${className}`}>

      <div className={styles.titleBox}>
        <h2 className="h4">Estadísticas generales</h2>
      </div>

        <CardStatistic
          title="Recepcionados"
          count={state.statistics.recepcionado}
          type='received'
        />

        <CardStatistic
          title="Revisados"
          count={state.statistics.revisado}
          type='reviewed'
        />

        <CardStatistic
          title="Reparados"
          count={state.statistics.reparado}
          type='repaired'
        />

        <CardStatistic
          title="Sin Reparación"
          count={state.statistics.sin_reparacion}
          type='withoutRepair'
        />

        <CardStatistic
          title="Devueltos"
          count={state.statistics.Devuelto}
          type='Returned'
        />
      </div>
      :
      <div className={`loaderBox ${styles.loaderBox}`}>
        <Loader /> 
      </div>
    

  );
};

export { Statistics };
