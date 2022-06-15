import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/FirebaseConfiguration";
import { UserContext } from "./UserProvider";

//nombre por default
export const UserRolContext = createContext();



const UserRolProvider = ({ children }) => {
    const { user} = useContext(UserContext);
    const [userRol, setUserRol] = useState(null);

    useEffect(async() => {
        console.log("Estoy en el servicio con", user.email)

        const docRef = doc(db, `Roles/${user.email}`);
        const docSnap = await getDoc(docRef);
        const rol = docSnap.data().rol;

        console.log("rool del servicio: " + rol)
        setUserRol(rol);

        return userRol

    }, [])


    return (
        <UserRolContext.Provider
            value={{userRol, setUserRol}}>
            {children}
        </UserRolContext.Provider>
    )
}

export default UserRolProvider;