import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //observer

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        //console.log("current user", currentUser);
        setLoading(false);
      } else {
        setLoading(true);
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const allInfo = {
    user,
    setUser,
    loading,
    setLoading,
    updateUser,
    createUser,
    loginUser,
    logOut,
  };
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
