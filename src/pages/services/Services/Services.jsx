import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa useParams
import { useService } from "../../../context/Service.Context";
import ServiceList from "../../../components/service/ServiceList/ServiceList";
import { schemaSearch } from "../../../utils/validate";
import { ServiceNewButton } from "../../../components/buttons/ServiceNewButton";
import { Navbar } from "../../../components/Layout/Navbar/Navbar";
import { Search } from "../../../components/UI/Search/Search";
import styles from "./Services.module.scss";

import { stateRoute } from "../../../utils/service.state";
import {  useLocation } from "react-router-dom";

function Services() {
  const {  serviceSearch, setFilterState } = useService();
  const { status } = useParams(); 
  const location = useLocation();
  const [selectedValue, setSelectedValue] = useState(status || "");

  useEffect(() => {
    setSelectedValue(status || ""); 
    setFilterState(stateRoute(status) || ""); 
  }, [status, setFilterState]);


  useEffect(() => {
    let url = location.pathname.replace("/servicios/", "");
    console.log(url)
    setSelectedValue(url);
    setFilterState(stateRoute(url));
  }, []);

  const handleChange = (event) => { 
    const value = event.target.value;
    console.log('value',value)
    setSelectedValue(value);
    setFilterState(stateRoute(value));

    window.history.pushState(null, '', `/servicios/${value}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="d-flex flex-column w-100">
      <Navbar>

      <ServiceNewButton className="d-sm-block d-md-none"/>

        <div className={styles.filterBox}>
          <form onSubmit={handleSubmit} className={styles.select}>
            <label htmlFor="statusFilter" className="me-2">Estado</label>
            <select
              id="statusFilter"
              value={selectedValue}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Todos</option>
              <option value="recepcionado">Recepcionado</option>
              <option value="revisado">Revisado</option>
              <option value="reparado">Reparado</option>
              <option value="sin-reparacion">Sin reparación</option>
            </select>
          </form>

          <Search
            initialValues={{ search: "" }}
            validationSchema={schemaSearch}
            onSubmit={(data) => {
              serviceSearch(data.search);
            }}
            placeholder="N° de servicio o cliente"
            className="m-auto"
          />
        </div>

        <ServiceNewButton className="d-none d-md-block"/>
      </Navbar>
      <main className={styles.main}>
        <ServiceList />
      </main>
    </section>
  );
}

export default Services;
