import { Statistics } from "../../components/Home/Statistics/Statistics";
import { LatestServices } from "../../components/Home/LatestServices/LatestServices";
import styles from "./Home.module.scss";
import { ServiceNewButton } from "../../components/Buttons/ServiceNewButton";
import { Navbar } from "../../components/Layout/Navbar/Navbar";

function Home() {


  return (
    <section className="d-flex flex-column w-100">
      <Navbar>
        <ServiceNewButton />
      </Navbar>

      <main className={styles.main}>
        <Statistics />

        <hr className="hr" />

        <LatestServices />
      </main>
    </section>
  );
}
export default Home;
