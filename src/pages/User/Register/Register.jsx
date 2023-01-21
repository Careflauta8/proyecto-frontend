
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import { postRegister } from '../../../services/apiCalls';

import './Register.css';
import '../../../common/InputText/InputText.css';

export const Register = () => {


    //creamos el hooks
    const [usuario, setUsuario] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        country: '',
        creditCard: ''
        
    })

    //Variables y constantes a utilizar
    const navigate = useNavigate();

    const registerInputHandler = (e) => {

        //Manejo la entrada de datos en los input y voy actualizando el hook usuario a medida
        //que los datos se van introduciendo

        //Bindear (atar)
        setUsuario((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
            
        }));;

    }

    const Registrarme = () => {
        //Desde aqui llamamos al servicio....
        postRegister(usuario)
        
            .then(
                resultado => {
                    console.log(resultado)
                    setTimeout(()=>{
                        navigate("/")
                    },750);
                 
                    
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <div className='registerDesign'>
            {/*<pre>{JSON.stringify(usuario, null, 2)}</pre>*/}
            Nombre
            <InputText 
            type={'text'} 
            name={'name'} 
            placeholder={'Escribe tu nombre'} 
            functionHandler={registerInputHandler}
            />
            Apellidos
             <InputText 
            type={'text'} 
            name={'surname'} 
            placeholder={'Escribe tu apellido'} 
            functionHandler={registerInputHandler}
            />
            Email
            <InputText 
            type={'email'} 
            name={'email'} 
            placeholder={'Escribe un correo electronico'} 
            functionHandler={registerInputHandler}
            />
            Password
            <InputText 
            type={'password'} 
            name={'password'} 
            placeholder={'Crea una contraseña'}  
            functionHandler={registerInputHandler}
            />
            Pais
             <InputText 
            type={'text'} 
            name={'country'} 
            placeholder={'Escribe tu pais de residencia'}  
            functionHandler={registerInputHandler}
            />
            Nº Tarjeta de Credito/Debito
             <InputText 
            type={'text'} 
            name={'creditCard'} 
            placeholder={'Nº tarjeta de credito/debito'}  
            functionHandler={registerInputHandler}
            />
            <div className ='registerButtonDesign' onClick = {()=>Registrarme()}>REGISTER</div>
        </div>
    );
};