import { useState } from 'react';
import { Navbar } from "../../../components/Layout/Navbar/Navbar";
import styles from "./Profile.module.scss";
import authRole from "../../../utils/auth.role";
import { HiOutlineMail } from "react-icons/hi";
import { ProfilePasswordEditButton } from "../../../components/Buttons/Profile/ProfilePasswordEditButton";
import { ProfileEditButton } from "../../../components/Buttons/Profile/ProfileEditButton";
import { useAuth } from "../../../context/Auth.Context";
import { Loader } from "../../../components/UI/Loader/Loader"
import { CAvatar } from '@coreui/react';

function Profile() {
  const { state } = useAuth();
  const [loading, setLoading] = useState(true);

  const getAvatarSrc = (avatar) => {
    try {
      return require(`../../../assets/avatars/${avatar}.jpeg`);
    } catch (err) {
      console.error("Error al cargar la imagen del avatar:", err);
      return null;
    }
  };

  return (
    <section className="d-flex flex-column w-100">
      <Navbar></Navbar>

      <main className={styles.main}>

        {!state.user ?
          <div className={`loaderBox ${styles.loaderBox}`}>
            <Loader /> 
          </div>
        :
        (
          <div className={styles.profileBox}>
          <div className={`rounded-2  ${styles.card}`}>
            <div className={` ${styles.nameBox}`}>
              <span className={`h6 estado ${styles.name}`}>
              <CAvatar src={getAvatarSrc(state.user.avatar)} className={styles.avatar}/>

                {state.user.name + " " + state.user.lastname}
              </span>

              <span>{authRole(state.user.role.role_name)}</span>
            </div>

            <div className={`rounded-2 py-3 ${styles.cardBody}`}>
              <div className=" d-flex justify-content-between mb-3">
                <span className="h5 m-0 d-flex align-items-center"></span>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <HiOutlineMail className={`me-2 ${styles.icon}`} />
                  <span className="text-box-card">{state.user.email}</span>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <ProfilePasswordEditButton />
                <ProfileEditButton user={state.user}/>
              </div>
            </div>
          </div>
        </div>

      )}  

      </main>
    </section>
  );
}
export default Profile;
