

import React, { useState } from 'react';
import './SerieDetail.css';

import dayjs from 'dayjs';

import { useNavigate } from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { serieData } from '../serieSlice';
import { userData } from '../User/userSlice';
import { poster_default } from '../../services/utiles';
import { postnewAlquiler } from '../../services/apiCalls';

export const SerieDetail = () => {


    const detailRdx = useSelector(serieData);
    const detailUsr = useSelector(userData);
    const navigate = useNavigate();

    //Hooks
    const [msg, setMsg] = useState('');

    //Funciones....
    const Alquilame = () => {

         //aquí llamaremos a la función que se comunica con la API
         //que podemos encontrarla en services
         //encargada de realizar el pedido....... le pasaremos detailRdx y detailUsr
         //porque ahi tendremos la id de user y la id de la serie

        //Vamos a recolectar los datos necesarios para hacer el alquiler y enviarlos al servicio

        let body = {

            //id de la serie...
            idSerie : detailRdx.choosen._id,
            idUser : detailUsr.userPass.user._id,
            fechaInicio : dayjs().format('MM/DD/YYYY'),
            fechaFin : dayjs().add(7, 'days').format('MM/DD/YYYY'),
            importe : 10,
            customer : detailUsr.userPass.user.name,
            nameSerie : detailRdx.choosen.title
        }
        console.log(detailUsr.userPass.token);
        console.log(detailRdx);

        postnewAlquiler(body, detailUsr.userPass.token)
            .then(resultado => {
                //Esto se ejecutará si el pedido se ha realizado correctamente
                //mostrando el mensaje

                setMsg(resultado.Message)


                //Después de haber realizado el pedido, llevamos al user a su perfil
                setTimeout(()=>{

                    navigate('/profile');
                },750);
                
            })
            .catch(error => {

                setMsg(error.message);
            });
    }

    return (
        <div className='serieDesign'>
            {detailRdx.choosen.id !== '' &&
            
                <div className='serieDetailCard'>
                    <div>{detailRdx.choosen.title}</div>

                    {detailRdx.choosen.original_title !== detailRdx.choosen.title &&

                        <div>{detailRdx.choosen.original_title}</div>
                    }
                    <div><img className='detailPoster' src={`${poster_default}${detailRdx.choosen.poster_path}`}/></div>
                    <div>{detailRdx.choosen.year}</div>
                    <div>{detailRdx.choosen.overview !== '' ? detailRdx.choosen.overview : "No tiene descripcion"}</div>

                    {/* En caso de que el usuario esté logeado, es decir, tenemos sus credenciales en REDUX, mostraremos
                    un boton para poder alquilar la película */}

                    {detailUsr.userPass.token !== '' &&
                    
                        <div onClick={()=>Alquilame()} className='alquilerDesign'>ALQUILAR</div>
                    }
                     <div>{msg}</div> 
                </div>
            
            }
        </div>
    )

};


