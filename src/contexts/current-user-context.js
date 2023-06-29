import { createContext } from "react";

const currentUserContext = createContext({
  currentUser: null,
  setCurrentUser: (currentUser) => {},
});

export default currentUserContext;
