import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  // google log in
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // github log in
  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    setUserLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // create user
  const createUser = (email, password) => {
    setUserLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const login = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    return signOut(auth);
  };

  // deleteAccount
  const deleteAccount = () => {
    return deleteUser(auth.currentUser);
  };

  // resetPassword
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // verifyAccount
  const verifyAccount = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // profileUpdate
  const profileUpdate = (name, img) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };

  // observe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const info = {
    googleLogin,
    githubLogin,
    userLoading,
    user,
    createUser,
    login,
    logOut,
    deleteAccount,
    profileUpdate,
    verifyAccount,
    resetPassword,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
