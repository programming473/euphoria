import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDzBZzK_c_vmbY5Fyds-5wQ6vk0BkTfzO4",
  authDomain: "euphoria-2d152.firebaseapp.com",
  projectId: "euphoria-2d152",
  storageBucket: "euphoria-2d152.appspot.com",
  messagingSenderId: "1020539862507",
  appId: "1:1020539862507:web:3dcc514d8fdfa26876edae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

