import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const EmployeeView =() => { 
    const {  userRol } = useContext(UserContext)
    const navigate = useNavigate();

  
    

    return(
        <>  
            <h1>Empleado</h1>
        </>
    )
}

export default EmployeeView;