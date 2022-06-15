import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfiguration";

const getRolService= async(user,refresh)=> {
    //let variable =[];

    console.log("Estoy en el servicio con", user.email)

    const docRef = doc(db, "Roles/"+ user.email);
    const docSnap = await getDoc(docRef);
    const rolService=docSnap.data().rol;


    //const rol = docSnap.data().rol;
    //const rol = docSnap.data().rol;

   console.log("rool del servicio: " + rolService)

   refresh(rolService);
   
}

export default getRolService;