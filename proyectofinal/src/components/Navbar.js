import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider';
const Navbar = () => {

    const { user, signOutUser,rol,setUserRol } = useContext(UserContext);

    const handleClickLogout =async () => { 
        
        try{

            await signOutUser();
            setUserRol(null);
            console.log('rol de que sal',rol)
            
            
        }catch (error){
            console.log(error.code);
        }
    }
    return (
        <div>
            {user ? (
                <>
                    <NavLink to="/">Inicio </NavLink>
                    <button onClick={handleClickLogout}> LogOut</button>
                </>


            ) : (


                <>
                    <NavLink to="/login">Login    </NavLink>
                    <NavLink to="/register">Register   </NavLink>
                </>
            )}


        </div>
    )
}

export default Navbar;