import React from 'react'
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useEffect, useState } from "react";


function ProtectedRoute({ children }) {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return <p>Loading...</p>;
  }


  return user ? children : <Navigate to="/admin/login" />;
}

export default ProtectedRoute;




