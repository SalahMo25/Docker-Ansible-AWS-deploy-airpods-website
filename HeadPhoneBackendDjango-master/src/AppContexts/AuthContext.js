    // import React, { useContext, useState, useEffect } from "react";
    // import { auth } from '../config/firebase.config';
    // import { sendPasswordResetEmail, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";

    // const AuthContext = React.createContext();

    // export const useAuth = () => {
    // return useContext(AuthContext);
    // };

    // export const AuthProvider = ({ children }) => {
    // // const [currentUser, setCurrentUser] = useState("");
    // const [loading, setLoading] = useState(true);

    // const signUp = (email, password) => {
    // return auth.createUserWithEmailAndPassword(email, password)
    // };

    // const login = (email, password) => {
    // return auth.signInWithEmailAndPassword(email, password)
    // };

    // const logout = () => {
    //     console.log("click");
    //     return signOut();
    // };

    // // const getUser = () => {
    // //     return auth.currentUser;
    // // }

    // const forgetPassword = (email) => {
    // return sendPasswordResetEmail(auth, email);
    // };

    // useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged(user => {
    //     // setCurrentUser(user)
    //     setLoading(false)
    // })

    // return unsubscribe
    // }, [])

    // // console.log("CurrentUser:", currentUser.email);

    // const value = {
    // // currentUser,
    // login,
    // signUp,
    // // getUser,
    // forgetPassword,
    // logout,
    // };

    // return (
    // <AuthContext.Provider value={value}>
    //     {!loading && children}
    // </AuthContext.Provider>
    // );
    // };
