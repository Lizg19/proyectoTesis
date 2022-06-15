import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/FirebaseConfiguration";
import getRolService from "../services/getRolService";

//nombre por default
export const UserContext = createContext();

const UserProvider = ({ children }) => {

     //la configuracion logica si existe un usuario
     const [user, setUser] = useState(false);
     const [rol, setUserRol] = useState();

     const refresh = (data) => {
        setUserRol(data);
        console.log(rol);
      };

    useEffect( () => {
        
        //se ejecuta pero luego se destruye, esto es un observable
        const unsusbribe = onAuthStateChanged (auth, user => {
            
            console.log("User", user);
            //console.log(JSON.stringify(userRol));
            //console.log("Rol", userRol);
        
            if (user) {
                const { email, photoURL, displayName, uid } = user;
                setUser({ email, photoURL, displayName, uid })   
                getRolService(user, refresh)        

            } else {
                setUser(null)
        
            }
        })

        return () => unsusbribe();
    }, [])


   
    const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const signOutUser = () => {
        signOut(auth); 
        window.localStorage.clear() ;
        
    }




    return (
        <UserContext.Provider
            value={{ user, setUser, registerUser, loginUser, signOutUser ,rol, setUserRol}}>
            {/*para que se visualicen los demas componentes*/}
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;