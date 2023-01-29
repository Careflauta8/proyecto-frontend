import React, { useState, useEffect } from 'react';
import './Admin.css';

import {useNavigate} from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { getallUsers } from '../../../services/apiCalls';
import { getAllAlquileres } from '../../../services/apiCalls';
import { serieData } from '../../serieSlice';


export const Admin = () => {

    const detailUsr = useSelector(userData);

    //Instancio useNavigate
    const navigate = useNavigate();

    //Instancio RDX
    const userRDX = useSelector(userData);

    const [allUsers, setAllUsers] = useState([]);
    const [allAlquileres, setAllAlquileres] = useState([]);

    useEffect(()=>{
        //Me conecto a redux para ver las credenciales de usuario y comprobar que su rol es admin...
        if(userRDX.userPass.user.rol !== 'admin'){
            navigate("/");
        }

    },[])

    useEffect(()=>{

            // getallUsers()
            //     .then(resultado => {
            //         console.log(resultado, 'aquiiiiii');

            //         //seteo el hook de los usuarios...
            //         setAllUsers(resultado);
            //     })
            console.log(allAlquileres, 'que coño es esto');
   if(allAlquileres.length === 0){
    getAllAlquileres(detailUsr.userPass.token)
    .then(resultado => {
console.log(resultado, 'kjdhjkasdhkdshk');
        //seteo el hook de los usuarios...
        setAllAlquileres(resultado.data);
    })
   }
},[ allAlquileres]);

    return (
        <div className='adminDesign'>
          {allAlquileres.length > 0 &&
                allAlquileres.map(
                    serie => {
                        return (
                            <div className='alquiler'>
                                <div><strong>Titulo:</strong>{serie.serieId.title}</div> 
                                <div><strong>Cliente:</strong>{serie.userId.name} {serie.userId.surname}</div>
                                <div><strong>Importe:</strong>{serie.importe}</div>
                            </div>
                        )
                    }
                )
            }


        </div>
    )
};
