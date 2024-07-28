import { useClient } from "../../../context/Client.Context";
import ClientList from "../../../components/client/ClientList/ClientList";
import { ClientNewButton } from "../../../components/Buttons/ClientNewButton";
import { schemaSearch } from "../../../utils/validate";
import { Search } from "../../../components/UI/Search/Search";
import { Navbar } from "../../../components/Layout/Navbar/Navbar";
import styles from "./Clients.module.scss";

const Clients = () => {
  const { clientSearch } = useClient();

  return (
    <section className="d-flex flex-column w-100">
      <Navbar>
        <ClientNewButton className="d-sm-flex d-sm-none" />

        <Search
          initialValues={{ search: "" }}
          validationSchema={schemaSearch}
          onSubmit={(data) => {
            clientSearch(data.search);
          }}
          placeholder="Nombre o Cuil/Cuit"
          className="m-auto"
        />

        <ClientNewButton className="d-none d-sm-flex" />
      </Navbar>

      <main className={styles.main}>
        <ClientList />
      </main>
    </section>
  );
};
export { Clients };
