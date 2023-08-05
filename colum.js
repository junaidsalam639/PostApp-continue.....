import { app, db, storage, auth } from './firebase.mjs'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, query, where, getDocs, doc, deleteDoc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getDownloadURL, ref, deleteObject, uploadBytes } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";






const getDat = async () => {
    const docRef = doc(db, "cardAdd", localStorage.getItem("id"));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
       
       
        getDownloadURL(ref(storage,  localStorage.getItem("id")))
            .then((url) => {
                console.log(url);
            })
            .catch((error) => {
                
            });
    } else {
        console.log("No such document!");
    }
}

getDat();
