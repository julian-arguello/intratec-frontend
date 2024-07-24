import { Statistics } from "../../components/Home/Statistics/Statistics";
import {LatestServices} from "../../components/Home/LatestServices/LatestServices";
import styles from "./Home.module.scss"
import { NewServiceButton } from "../../components/buttons/NewServiceButton";
import { Navbar } from "../../components/Layout/Navbar/Navbar";

function Home() {


  return (
    <section className="d-flex flex-column w-100">
      <Navbar>
        {/* <p className="m-0">Tablero Pincipal</p> */}
        <NewServiceButton />
      </Navbar>


      <main className={styles.main}>

         <Statistics />

        <hr className="hr mx-4" />

        <LatestServices />
       
      </main>

    </section>
  );
}
export default Home;
