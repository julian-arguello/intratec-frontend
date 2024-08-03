import { createContext, useContext, useReducer, useState } from "react";
import UserReducer from "../reducer/User.Reducer";
import { useAuth } from "./Auth.Context";

import {
  ActionAdd,
  ActionRemove,
  ActionGet,
  ActionGetId,
  ActionUpdate,
  ActionGetRole,
  ActionFilterUser
} from "../action/User.Actions";

import * as API from "../api/user.api";

const UserContext = createContext();

/*-----------------------------------------------------------------*/

export function UserProvider({ children }) {
  //useReduce
  //useReducer recibe dos parametros (funcion reduce, {states por defectos})
  const [state, dispatch] = useReducer(UserReducer, {
    users: [],
    user: {},
    roles: [],
    UserFilter: [],
  });
  const [filterState, setFilterState] = useState("");

  const {updateUserAuth} = useAuth()
  /*-----------------------------------------------------------------*/

  //traemos todos los Users.
  const findUser = async () => {
    try {
      const users = await API.viewAlls();
      dispatch(ActionGet(users));
    } catch (err) {
      return { status: "error", msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/

  //Traemos un User por id.
  const findUserId = async (id) => {
    try {
      const user = await API.viewId(id);
      dispatch(ActionGetId(user));
    } catch (err) {
      return { status: "error", msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/
  //Nuevo User.
  const addUser = async (user) => {
    try {
      const res = await API.add(user);

      if (res.status === 'success') {
        const users = await API.viewAlls();
        dispatch(ActionAdd(users));
      }
      
      return res;
    }  catch (err) {
      console.error("Error adding client:", err.message);
      return { status: 'error', msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/
 //Editar User.
    const editUser = async (user, SA) => {
      try {
        const res = await API.edit(user, SA);
        
        if (res.status === 'success') {
          const users = await API.viewAlls();
          dispatch(ActionUpdate(users));
        }
        
        return res;
      }  catch (err) {
        console.error("Error adding client:", err.message);
        return { status: 'error', msg: err.message };
      }
    };
  /*-----------------------------------------------------------------*/
 //Editar User.
    const profileEdit = async (user) => {
      try {
        const userId = user._id;
        const res = await API.edit(user);
        
        if (res.status === 'success') {
          const user = await API.viewId(userId);
          updateUserAuth(user);
        }
        
        return res;
      }  catch (err) {
        console.error("Error adding client:", err.message);
        return { status: 'error', msg: err.message };
      }
    };
  
  /*-----------------------------------------------------------------*/

  //Elimina un User
  const delUser = async (id) => {
    try {
      const res = await API.del(id);
      dispatch(ActionRemove(id));
      return res;
    } catch (err) {
      return { status: "error", msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/
  /*-----------------------------------------------------------------*/

  //traemos todos los roles.
  const findRole = async () => {
    try {
      const roles = await API.viewRole();
      dispatch(ActionGetRole(roles));
      console.log("state", roles);
      return roles;
    } catch (err) {
      return { status: "error", msg: err.message };
    }
  };
  /*-----------------------------------------------------------------*/
  const userSearch = (filter) => {
    dispatch(ActionFilterUser(filter));
  };
  /*-----------------------------------------------------------------*/
  /*-----------------------------------------------------------------*/

  //return
  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        findUser,
        findUserId,
        addUser,
        editUser,
        delUser,
        findRole,
        userSearch,
        filterState,
        setFilterState,
        profileEdit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
//retornamos el useContext de AuthContext.
export function useUser() {
  return useContext(UserContext);
}
