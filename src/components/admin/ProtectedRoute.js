import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const ONE_DAY = 24 * 60 * 60 * 1000; // 24 Hours

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {

            if (!user) {
                setIsAuthorized(false);
                setLoading(false);
                return;
            }

            const loginTime = localStorage.getItem("loginTime");

            if (!loginTime) {
                await signOut(auth);
                setIsAuthorized(false);
                setLoading(false);
                return;
            }

            const currentTime = Date.now();
            const diff = currentTime - Number(loginTime);

            if (diff > ONE_DAY) {
                alert("Session expired. Please login again.");
                await signOut(auth);
                localStorage.removeItem("loginTime");
                setIsAuthorized(false);
                setLoading(false);
                return;
            }

            setIsAuthorized(true);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
            >
                <div className="spinner-border text-primary"></div>
            </div>
        );
    }

    if (!isAuthorized) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
}

export default ProtectedRoute;