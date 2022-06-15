import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext} from "../context/UserProvider";
import getRolService from "../services/getRolService";

const Login =()=>{ 
    //con esta linea obtenemos la información del usuario que esta dentro del UserProvider

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const {loginUser, rol} =useContext(UserContext);



    const navigate = useNavigate();
    
    const handleSubmit = async (e)=> {
        
        
        e.preventDefault();
        console.log("Procesado form de inicio", email, password);
        console.log("Usuario activo");
      

        try{
             await loginUser(email, password)
             console.log("roool para mateo",rol)
             if(rol==="admin"){
                navigate("/admin")
             }else if(rol==="empleado"){
                navigate("/empleado")
             }
             
            
        }catch(error){
            console.log("Error de inicio de sesión", error);
        }
    }

  


    
    return (
        <> 
            <h1>LOGIN</h1>  
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Ingrese email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Ingrese password"  value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" >Iniciar</button>
            </form>
        </>
    );
}

export default Login;
