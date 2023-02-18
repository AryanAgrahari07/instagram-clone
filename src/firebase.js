import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// createUserWithEmailAndPassword();

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });


const firebaseConfig = {
        apiKey: "AIzaSyBvuAx5Y6j9UnDAwBJ6JEbVpI8qpVDm2wo",
        authDomain: "instagram-clone-db990.firebaseapp.com",
        projectId: "instagram-clone-db990",
        storageBucket: "instagram-clone-db990.appspot.com",
        messagingSenderId: "168934221348",
        appId: "1:168934221348:web:2eab21d262e21413175ab1",
        measurementId: "G-Z6C60HW2SX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// var email = document.getElementById("email").value;
// var password = document.getElementById("password").value;

// export default function signUp(){
//         const [password, setPassword] = useState('');
//         const [email, setEmail] = useState('');
//         createUserWithEmailAndPassword(auth, email, password).then(cred => {
//         console.log(cred);
//     }).catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// }
// });

// export const signUp = (event)=>{
//         event.preventDefault();
   
//         auth
//         .createUserWithEmailAndPassword(email,password)
//         .catch((error) => alert(error.message));
//      }
export const storage = getStorage(app);
export const db = getFirestore(app);
