import React, { useState } from "react";
import {
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavTitle,
  CImage,
  CSidebarHeader,
  CAvatar,
} from "@coreui/react";
import styles from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/Auth.Context";
import { RoleSuperAdmin } from "../../../components/authRole/RoleSuperAdmin";
import { FaRegChartBar } from "react-icons/fa";
import { TbUser, TbUsers, TbUsersGroup } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import images from "../../../assets/images";
import { AuthComponent } from "../../AuthComponent";
import { useNav } from "../../../context/Navigate.Context";
import { PiCardsBold } from "react-icons/pi";
import { CustomModal } from "../../UI/CustomModal/CustomModal";

const Sidebar = () => {
  const { state, logout } = useAuth();
  const location = useLocation();
  const { visible, setVisible, narrow } = useNav();
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleConfirm = () => {
    logout();
    handleClose();
  };

  const getAvatarSrc = (avatar) => {
    try {
      return require(`../../../assets/avatars/${avatar}.jpeg`);
    } catch (err) {
      console.error("Error al cargar la imagen del avatar:", err);
      return null;
    }
  };

  return (
    <AuthComponent>
      <CSidebar
        className={`border-end ${styles.sidebar}`}
        visible={visible}
        narrow={narrow}
        position="sticky"
        onHide={()=>{setVisible(false)}}
        onShow={()=>{setVisible(true)}}

      >
        <CSidebarHeader className={`border-bottom ${styles.logoBox}`}>
          {narrow ? (
            <CImage fluid src={images.mob} alt="logo" width={35} height={35} />
          ) : (
            <CImage fluid src={images.desk} alt="logo" />
          )}
        </CSidebarHeader>

        <CSidebarNav className={styles.sidebarNav}>
          <CNavTitle className="m-0">
            <p>Bienvenido</p>
            {state.isAuth && <CAvatar src={getAvatarSrc(state.user.avatar)} size="md" className={styles.avatar}/>}
            {state.isAuth && `${state.user.name} ${state.user.lastname}`}
          </CNavTitle>

          <CNavItem
            className={`rounded-2 mb-2 ${
              location.pathname == "/inicio" ? styles.active : ""
            } `}
          >
            <Link to="/inicio" className="nav-link">
              <FaRegChartBar className="nav-icon" />
              Tablero principal
            </Link>
          </CNavItem>

          <CNavItem
            className={`rounded-2 mb-2 ${
              location.pathname.startsWith("/servicios") ? styles.active : ""
            } `}
          >
            <Link to="/servicios" className="nav-link">
              <PiCardsBold className="nav-icon" />
              Servicios
            </Link>
          </CNavItem>

          <CNavItem
            className={`rounded-2 mb-2 ${
              location.pathname.startsWith("/clientes") ? styles.active : ""
            } `}
          >
            <Link to="/clientes" className="nav-link">
              <TbUsersGroup className={`nav-icon  ${styles.navIcon}`} />
              Clientes
            </Link>
          </CNavItem>
          <hr />

          <CNavItem
            className={`rounded-2 mb-2 ${
              location.pathname == "/perfil" ? styles.active : ""
            } `}
          >
            <Link to="/perfil" className="nav-link">
              <TbUser className={`nav-icon  ${styles.navIcon}`} />
              Perfil
            </Link>
          </CNavItem>

          <RoleSuperAdmin>
            <CNavItem
              className={`rounded-2 mb-2 ${
                location.pathname == "/usuarios" ? styles.active : ""
              } `}
            >
              <Link to="/usuarios" className="nav-link">
                <TbUsers className={`nav-icon  ${styles.navIcon}`} />
                Usuarios
              </Link>
            </CNavItem>
          </RoleSuperAdmin>

          <div className={styles.footer}>
            <CNavItem>
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleShow();
                }}
                className="nav-link"
              >
                <RxExit className={`nav-icon ${styles.navIcon}`} />
                Cerrar sesión
              </Link>
            </CNavItem>
            <CustomModal
              show={showModal}
              handleClose={handleClose}
              title="Confirmación"
              onConfirm={handleConfirm}
              confirmText="Cerrar sesión"
              cancelText="Cancelar"
            >
              ¿Estás seguro de que deseas cerrar sesión?
            </CustomModal>
          </div>
        </CSidebarNav>
      </CSidebar>
    </AuthComponent>
  );
};

export { Sidebar };
