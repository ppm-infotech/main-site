import {
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    orderBy
} from "firebase/firestore";

import { db } from "./config";

const blogCollection = collection(db, "blogs");

// Get all blogs
// export const getBlogs = async () => {
//     const q = query(blogCollection, orderBy("createdAt", "desc"));

//     const snapshot = await getDocs(q);

//     return snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));
// };

export const getBlogs = async () => {
    const q = query(blogCollection, orderBy("createdAt", "desc"));

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};

// Get one blog by ID
export const getBlog = async (id) => {
    const blogRef = doc(db, "blogs", id);
    const snapshot = await getDoc(blogRef);

    if (!snapshot.exists()) {
        return null;
    }

    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
};

// Create blog
export const createBlog = async (data) => {
    return await addDoc(blogCollection, data);
};

// Update blog
export const updateBlog = async (id, data) => {
    const blogRef = doc(db, "blogs", id);

    return await updateDoc(blogRef, data);
};

// Delete blog
export const deleteBlog = async (id) => {
    const blogRef = doc(db, "blogs", id);

    return await deleteDoc(blogRef);
};