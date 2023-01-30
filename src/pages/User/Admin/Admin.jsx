import React, { useState, useEffect } from 'react';
import './Admin.css';

import {useNavigate} from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { getAllAlquileres } from '../../../services/apiCalls';



export const Admin = () => {

    const detailUsr = useSelector(userData);

    //Instancio useNavigate
    const navigate = useNavigate();

    //Instancio RDX
    const userRDX = useSelector(userData);

    
    const [allAlquileres, setAllAlquileres] = useState([]);

    useEffect(()=>{
        //Me conecto a redux para ver las credenciales de usuario y comprobar que su rol es admin...
        if(userRDX.userPass.user.rol !== 'admin'){
            navigate("/");
        }

    },[])

    useEffect(()=>{
   if(allAlquileres.length === 0){
    getAllAlquileres(detailUsr.userPass.token)
    .then(resultado => {
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
                                <br/>
                                <div><strong>Cliente:</strong>{serie.userId.name} {serie.userId.surname}</div>
                                <br />
                                <div><strong>Fecha Inicio:</strong>{serie.fechaInicio}</div>
                                <br/>
                                <div><strong>Fecha Fin:</strong>{serie.fechaFin}</div>
                                <br/> 
                                <div><strong>Importe:</strong>{serie.importe}</div>
                            </div>
                        )
                    }
                )
            }


        </div>
    )
};
