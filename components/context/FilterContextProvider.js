import React, { useEffect, useContext, useReducer, useRef } from "react";
import { useRouter } from "next/router";

const FilterContext = React.createContext();
const FilterContextDispatcher = React.createContext();

const initalState = {
  tagsState: [],
  categoriesState: [],
  blogsState: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILTER":
      state[action.filter].push(action.payload);
      return {
        ...state,
      };
    case "REMOVE_FILTER":
      const filterIndex = state[action.filter].indexOf(action.payload);
      state[action.filter].splice(filterIndex, 1);
      return {
        ...state,
      };
  }
};

export default function FilterContextProvider({ children }) {
  const isInitialMount = useRef(true);
  const [filter, dispatch] = useReducer(reducer, initalState);

  const router = useRouter();
  const { tags__in, categories, blogs__in } = router.query;

  useEffect(() => {
    //! hard code :(
    if (isInitialMount.current) {
      isInitialMount.current = false;
      blogs__in
        ? typeof blogs__in == "string"
          ? initalState.blogsState.push(blogs__in)
          : initalState.blogsState.push(...blogs__in)
        : null;
      tags__in
        ? typeof tags__in == "string"
          ? initalState.tagsState.push(tags__in)
          : initalState.tagsState.push(...tags__in)
        : null;
      categories
        ? typeof categories == "string"
          ? initalState.categoriesState.push(categories)
          : initalState.categoriesState.push(...categories)
        : null;
    } else {
      // Your useEffect code here to be run on update
    }
  }, [router.query]);

  return (
    <FilterContext.Provider value={filter}>
      <FilterContextDispatcher.Provider value={dispatch}>
        {children}
      </FilterContextDispatcher.Provider>
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);
export const useFilterAction = () => useContext(FilterContextDispatcher);
