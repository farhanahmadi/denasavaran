import React, { useContext, useEffect, useRef } from "react";
import { useReducerAsync } from "use-reducer-async";
import axios from "axios";
import Router from "next/router";
import { BaseLink } from "../BaseLink/BaseLink";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const AuthContext = React.createContext();
const AuthContextDispatcher = React.createContext();

const initialState = {
  user: "",
  token: "",
  loading: true,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { ...state, user: "", token: "", loading: true, error: false };
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        token: action.token,
        loading: false,
        error: false,
      };
    case "SIGNIN_FAIL":
      return {
        ...state,
        user: "",
        token: "",
        loading: false,
        error: action.error,
      };
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
          dispatch({
            type: "SIGNIN_SUCCESS",
            payload: data.user_data,
            token: data.token,
          });
          toast.success("با موفقیت وارد شدید");
          Router.back();
        })
        .catch((error) => {
          if (error.response) {
            dispatch({ type: "SIGNIN_FAIL", error: "an error has occurred" });
            toast.error(error.response.data);
          }
        });
    },

  SIGNUP:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post(`${BaseLink}/register/user/`, action.payload)
        .then(({ data }) => {
          dispatch({ type: "SIGNIN_SUCCESS", payload: "" });
          Router.push("/auth/login");
        })
        .catch((error) =>
          dispatch({ type: "SIGNIN_FAIL", error: "an error has occurred" })
        );
    },

  SIGNOUT:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("/api/auth/Logout")
        .then(() => {
          dispatch({ type: "SIGNIN_SUCCESS", payload: "" });
          toast.success("با موفقیت خارج شدید");
          Router.push(
            "/",
            { pathname: Router.pathname, query: Router.query },
            undefined,
            {
              scroll: false,
            }
          );
        })
        .catch((error) => {
          dispatch({ type: "SIGNIN_FAIL", error: "an error has occurred" });
          toast.error("مشکلی رخ داده است لطفا دوباره تلاش کنید");
        });
    },

  LOAD_USER:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("/api/auth/LoadUser")
        .then(({ data }) => {
          dispatch({
            type: "SIGNIN_SUCCESS",
            payload: data.userData,
            token: data.token,
          });
        })
        .catch((error) =>
          dispatch({ type: "SIGNIN_FAIL", error: "an error has occurred" })
        );
    },
};

export default function AuthContextProvider({ children }) {
  const router = useRouter();
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
  }, [router.query]);
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
