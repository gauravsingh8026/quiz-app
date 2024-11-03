import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig"; // Replace with your Firebase auth instance

// Create the context
const CurrentUserContext = createContext(null);

// Create a custom hook to use the CurrentUserContext
export const useCurrentUser = () => useContext(CurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Set loading to false after the auth check
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []);

  // Provide currentUser and loading status to the context
  return (
    <CurrentUserContext.Provider value={{ currentUser, loading }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
