
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmXyfDpdiXVoOstvXDJUFTmE8vc17t2Xc",
  authDomain: "vete-destino-indumentaria.firebaseapp.com",
  projectId: "vete-destino-indumentaria",
  storageBucket: "vete-destino-indumentaria.appspot.com",
  messagingSenderId: "592025018513",
  appId: "1:592025018513:web:1c6f49af3095245e259f30"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);