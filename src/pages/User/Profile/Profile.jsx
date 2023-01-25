
import React, {useEffect} from 'react';
import './Profile.css';

import { useNavigate } from 'react-router-dom';

//Imports de RDX
//primero importo métodos que me permitirán conectarme para leer y modificar en redux
import { useSelector } from "react-redux";
import { userData } from '../userSlice';


export const Profile = () => {

    //Instancio useNavigate
    const navigate = useNavigate();

    //Instancio RDX
    const userRDX = useSelector(userData);
    
    useEffect(()=>{

        if(userRDX.userPass.token === ''){
            navigate("/");
        } else {
            //A este else entraremos si SI que tenemos el token....
            console.log(userRDX.userPass);
        }
    },[]);


    return (
        <div className='profileDesign'>
            DATOS DE USUARIO
            <div>
               Nombre:
            </div>
            <div  className='dataDesign'>
               {userRDX.userPass.user.name}
            </div>
            <div>
                Apellidos:
            </div>
            <div className='dataDesign'>
                {userRDX.userPass.user.surname}
            </div>
            <div>
                Email:
            </div>
            <div className='dataDesign'>
                {userRDX.userPass.user.email}
            </div>
            <div>
                Pais:
            </div>
            <div className='dataDesign'>
                {userRDX.userPass.user.country}
            </div>
            <div>
                Nº Tarjeta de Credito/Debito:
            </div>
            <div  className='dataDesign'>
                {userRDX.userPass.user.creditCard}
            </div> 
        </div>
    )
}