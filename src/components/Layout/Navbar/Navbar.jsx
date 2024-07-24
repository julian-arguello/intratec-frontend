import React from "react";
import { CNavbar, CContainer, CNavbarBrand, CButton } from "@coreui/react";
import styles from "./Navbar.module.scss";
import { FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { useNav } from "../../../context/Navigate.Context";

const Navbar = ({children}) => {
  const { visible, setVisible, narrow, setNarrow} = useNav();

  return (
    <CNavbar className={`sticky-top ${styles.navbar}`}>
      <CContainer fluid>
        <button
          className={`btn btn-outline-primary  d-lg-none rounded-2 ${styles.togglerBtn}`}
          onClick={() => setVisible(!visible)}
          role="button" 
          tabIndex="0"
        >
          <FaBars />
        </button>

        <button
          className={`btn btn-outline-primary d-none d-lg-block rounded-2 ${styles.togglerBtn}`}
          onClick={() => setNarrow(!narrow)}
          role="button"
          tabIndex="0"
        >
          {narrow ? <FaBars /> : <MdOutlineKeyboardArrowLeft />}
        </button>


        {children}

        
      </CContainer>
    </CNavbar>
  );
};

export { Navbar };
