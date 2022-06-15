import { async } from "@firebase/util";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register =() => { 
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    

    const navigate =useNavigate();

    const {registerUser} = useContext(UserContext);

    const handleSubmit = async(e)=> {
        e.preventDefault();
        console.log("Procesado form de registro", email, password);
        console.log("Usuario creado en Firebase");
        navigate("/")

        try{
            await registerUser(email, password)
        }catch(error){
            console.log("Error de registro", error);
        }
    }

    
    return(
        <>  
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Ingrese email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Ingrese password"  value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;