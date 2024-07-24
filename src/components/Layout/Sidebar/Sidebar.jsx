import React, { useState } from "react";
import {
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavTitle,
  CImage,
  CSidebarHeader,
} from "@coreui/react";
import styles from "./Sidebar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/Auth.Context";
import RoleSuperAdmin from "../../../components/authRole/RoleSuperAdmin";
import { FaRegChartBar } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { TbUser } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { TbUsersGroup } from "react-icons/tb";
import { RxExit } from "react-icons/rx";
import images from "../../../assets/images";
import { AuthComponent } from "../../AuthComponent";
import { useNav } from "../../../context/Navigate.Context";

const Sidebar = () => {
  const { state, logout } = useAuth();
  const location = useLocation();
  const {visible, setVisible, narrow} = useNav();

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };

  return (
    <AuthComponent>
      <CSidebar
        className={`border-end ${styles.sidebar}`}
        // colorScheme="dark"
        visible={visible}
        //onVisibleChange={ handleVisibleChange}
        narrow={narrow}
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
            <p className="">Bienvenido</p>
            {state.isAuth && (state.user.name + " " + state.user.lastname + " ")}
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
              location.pathname == "/servicios" ? styles.active : ""
            } `}
          >
            <Link to="/servicios" className="nav-link">
              <BsCardList className="nav-icon" />
              Servicios
            </Link>
          </CNavItem>

          <CNavItem
            className={`rounded-2 mb-2 ${
              location.pathname == "/clientes" ? styles.active : ""
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
              <Link to="/" onClick={() => logout()} className="nav-link">
                <RxExit className={`nav-icon  ${styles.navIcon}`} />
                Cerrar sesión
              </Link>
            </CNavItem>
          </div>
        </CSidebarNav>


      </CSidebar>
    </AuthComponent>
  );
};

export { Sidebar };