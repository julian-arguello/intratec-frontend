import authRole from "../../../../utils/auth.role";
import styles from "./UserItem.module.scss";
import { HiOutlineMail } from "react-icons/hi";
import { UserEditButton } from "../../../Buttons/UserEditButton";
import { LiaIdCardSolid } from "react-icons/lia";

import { LuShieldCheck } from "react-icons/lu";
import { LuShieldClose } from "react-icons/lu";

const UserItem = ({ user }) => {
  const status = user.softDelete === "false";

  return (
    <div
      className={`rounded-2  ${styles.card} ${!status && styles.disabledCard}`}
    >
      <div
        className={`rounded-2 ${styles.nameBox} ${
          !status && styles.disabledName
        }`}
      >
        <span className={`h6 estado ${styles.name}`}>
          {user.name} {user.lastname}
        </span>
      </div>

      <div className={`rounded-2 py-3 ${styles.cardBody}`}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <HiOutlineMail className={`me-2 ${styles.icon}`} />
            <span className="text-box-card">{user.email}</span>
          </div>
        </div>

        <div className="d-flex align-items-center mb-3">
          <LiaIdCardSolid className={`me-2 ${styles.icon}`} />
          <span className="text-box-card">{authRole(user.role.role_name)}</span>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start align-items-center">
            {status ? (
              <LuShieldCheck className={`me-2 ${styles.icon}`} />
            ) : (
              <LuShieldClose className={`me-2 ${styles.icon}`} />
            )}

            <span className="text-box-card">
              {status ? "Habilitado" : "Deshabilitado"}
            </span>
          </div>

          <UserEditButton user={user} />
        </div>
      </div>
    </div>
  );
};

export { UserItem };
