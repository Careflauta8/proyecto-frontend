
import React, { useState, useEffect } from 'react';
import './Profile.css';

import { useNavigate } from 'react-router-dom';

//Imports de RDX
//primero importo métodos que me permitirán conectarme para leer y modificar en redux
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { userAlquileres } from '../../../services/apiCalls';

export const Profile = () => {

    //Instancio useNavigate
    const navigate = useNavigate();

    const [alquileres, setAlquileres] = useState([]);
    //Instancio RDX
    const userRDX = useSelector(userData);
    console.log(userRDX);
    useEffect(()=>{

        if(userRDX.userPass.token === ''){
            navigate("/");
        } else {
            //A este else entraremos si SI que tenemos el token....
            userRDX.userPass
        }
    },[]);



useEffect(() => {
    if (alquileres.length === 0){
        console.log(userRDX.userPass.user._id);
        setTimeout(()=>{
            
            userAlquileres(userRDX.userPass.token, userRDX.userPass.user._id)
            
           
            .then(
                resultado => {
                console.log(resultado, 'sa,jkasjkass');
                    setAlquileres(resultado.data)
                  
                }
            )
            .catch(error => console.log(error));
        }, 500);
    }
}, [alquileres]);

    return (
        <div className='profileDesign'>
            <h2>DATOS DE USUARIO</h2>
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
            <div>
                <h2>MIS ALQUILERES</h2>
              
            </div>
            <div>
           
            {alquileres.length > 0 &&
               alquileres.map(
              
                    serie => {
                        return (
                            
                            <div key={serie._id}>  
                            
                                <table>     
                                    <tbody>
                                        <tr>
                                            <td>{serie.nameSerie}</td>
                                            <td>{serie.fechaInicio}</td>
                                            <td>{serie.fechaFin}</td>
                                        </tr>
                                    </tbody>
                                </table> 
                            </div>                             
                        )
                    }
                )
                
            }
            </div>
         

        </div>
    )
}