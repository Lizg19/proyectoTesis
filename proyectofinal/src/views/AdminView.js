import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const AdminView =() => { 
  const {  userRol } = useContext(UserContext)
  const navigate = useNavigate();
  
   
    return(
        <>  
            <h1>ADMINISTRADOR</h1>
        </>
    )
}

export default AdminView;