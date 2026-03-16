import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

const useSnippets = (userId) => {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const q = query(
      collection(db, "snippets"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSnippets(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userId]);

  const addSnippet = async (snippet) => {
    await addDoc(collection(db, "snippets"), {
      ...snippet,
      userId,
      createdAt: serverTimestamp(),
    });
  };

  const deleteSnippet = async (id) => {
    await deleteDoc(doc(db, "snippets", id));
  };

  const updateSnippet = async (id, updated) => {
    await updateDoc(doc(db, "snippets", id), updated);
  };

  return { snippets, loading, addSnippet, deleteSnippet, updateSnippet };
};

export default useSnippets;