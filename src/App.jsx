import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.dark.themeMode);
    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    }, []);
    useEffect(() => {
        document.querySelector("html").classList.remove("dark", "light");
        document.querySelector("html").classList.add(mode);
    }, [mode]);

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400 dark:bg-gray-700">
            <div className="w-full block">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    ) : (
        <Loader />
    );
}

export default App;
