import React, { useEffect, useState } from "react";
import { UserItem } from "./UserItem/UserItem";
import { Loader } from "../../UI/Loader/Loader";
import { Pagination } from "../../UI/Pagination/Pagination";
import { WithoutResults } from "../../UI/withoutResults/withoutResults";
import styles from "./UserList.module.scss";
import { useUser } from "../../../context/User.Context";

export function UserList() {
  const { state, findUser, reload } = useUser();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    findUser().then(() => setLoading(false));
    setCurrentPage(1);
  }, [reload]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = state.UserFilter.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    !loading ? 
    <div className={styles.userBox}>
      {currentUsers.length === 0 ? (
        <WithoutResults message="No se encontraron usuarios para mostrar" />
      ) : (
        currentUsers.reverse().map((user) => (
          <UserItem key={user._id} user={user} />
        ))
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={state.UserFilter.length}
        paginate={paginate}
        currentPage={currentPage}
        className={`${styles.pagination}`}
      />
    </div>
    :
    <div className={`loaderBox ${styles.loaderBox}`}>
      <Loader /> 
    </div>
  );
}

export default UserList;
