import UserList from "../../components/Users/UserList/UserList";
import { UserNewButton } from "../../components/Buttons/UserNewButton";
import { Navbar } from "../../components/Layout/Navbar/Navbar";
import { Search } from "../../components/UI/Search/Search";
import styles from "./Users.module.scss";
import { schemaSearch } from "../../utils/validate";
import { useUser } from "../../context/User.Context";

const Users = () => {
  const { userSearch } = useUser();

  return (
    <section className="d-flex flex-column w-100">
      <Navbar>
        <Search
          initialValues={{ search: "" }}
          validationSchema={schemaSearch}
          onSubmit={(data) => {
            userSearch(data.search);
          }}
          placeholder="Nombre o Correo electrónico"
          className="m-auto"
        />

        <UserNewButton />
      </Navbar>

      <main className={styles.main}>
        <UserList />
      </main>
    </section>
  );
}
export { Users };
