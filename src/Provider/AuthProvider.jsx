import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword,setShowPassword]=useState(false) 

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    LoginUser,
    loginWithGoogle,
    logout,
    user,
    setUser,
    setErrorMessage,
    errorMessage,
    showPassword,
    setShowPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
