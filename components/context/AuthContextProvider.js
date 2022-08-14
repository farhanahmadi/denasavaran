import React, { useContext, useEffect, useRef } from "react";
import { useReducerAsync } from "use-reducer-async";
import axios from "axios";
import { BaseLink } from "../BaseLink/BaseLink";
import cookie from "cookie";

const AuthContext = React.createContext();
const AuthContextDispatcher = React.createContext();

const initialState = {
  user: "",
  loading: true,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { ...state, user: "", loading: true, error: false };
    case "SIGNIN_SUCCESS":
      return { ...state, user: action.payload, loading: false, error: false };
    case "SIGNIN_FAIL":
      return { ...state, user: "", loading: false, error: action.error };
  }
};

const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post(`${BaseLink}/login/user/`, action.payload)
        .then(({ data }) => {
          axios.post("/api/auth", { token: data.token });
          dispatch({ type: "SIGNIN_SUCCESS", payload: data.user_data });
        })
        .catch((error) =>
          dispatch({ type: "SIGNIN_FAIL", error: "an error has occurred" })
        );
    },

  LOAD_USER:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("/api/auth/LoadUser")
        .then(({ data }) =>
          dispatch({ type: "SIGNIN_SUCCESS", payload: data.userData })
        )
        .catch((error) =>
          dispatch({ type: "SIGNIN_FAIL", error: "an error has occurred" })
        );
    },
};

export default function AuthContextProvider({ children }) {
  const isInitialMount = useRef(true);
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      dispatch({ type: "LOAD_USER" });
    } else {
    }
  }, []);
  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
