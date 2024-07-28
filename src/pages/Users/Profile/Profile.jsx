import ProfileDetail from "../../../components/profile/ProfileDetail";
import { Navbar } from "../../../components/Layout/Navbar/Navbar";
import styles from "./Profile.module.scss";

function Profile() {
  return (
    <section className="d-flex flex-column w-100">
      <Navbar></Navbar>

      <main className={styles.main}>
        <ProfileDetail />
      </main>
    </section>
  );
}
export default Profile;
