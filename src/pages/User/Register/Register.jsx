
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import { postRegister } from '../../../services/apiCalls';
import { errorCheck } from '../../../services/utiles';

import './Register.css';
import '../../../common/InputText/InputText.css';

export const Register = () => {


    //creamos los hooks
    const [usuario, setUsuario] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        country: '',
        creditCard: ''
        
    })
    const [usuarioError, setUsuarioError] = useState({
        nameError: '',
        surnameError: '',
        emailError: '',
        passwordError: '',
        countryError: '',
        creditCardError: ''
    })

    const navigate = useNavigate();

    // //Variables y constantes a utilizar
    // const navigate = useNavigate();

    const registerInputHandler = (e) => {

        //Manejo la entrada de datos en los input y voy actualizando el hook usuario a medida
        //que los datos se van introduciendo

        //Bindear (atar)
        setUsuario((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
            
        }));;

    }
    const registerErrorHandler = (e) => {

        let error = '';

        error = errorCheck(e.target.name, e.target.value);


        setUsuarioError((prevState)=>({...prevState, 
            [e.target.name + 'Error'] : error
        }));
        
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
            className={usuarioError.nameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
            placeholder={'Escribe tu nombre'} 
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.nameError}</div>
            Apellidos
             <InputText 
            type={'text'} 
            name={'surname'}
            className={usuarioError.surnameError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
            placeholder={'Escribe tu apellido'} 
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.surnameError}</div>
            Email
            <InputText 
            type={'email'} 
            name={'email'}
            className={usuarioError.emailError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}  
            placeholder={'Escribe un correo electronico'} 
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.emailError}</div>
            Password
            <InputText 
            type={'password'} 
            name={'password'} 
            className={usuarioError.passwordError === '' ? 'inputDesign' : 'inputDesign inputDesignError'} 
            placeholder={'Crea una contraseña'}  
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.passwordError}</div>
            Pais
             <InputText 
            type={'text'} 
            name={'country'}
            className={usuarioError.countryError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}  
            placeholder={'Escribe tu pais de residencia'}  
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.countryError}</div>
            Nº Tarjeta de Credito/Debito
             <InputText 
            type={'text'} 
            name={'creditCard'}
            className={usuarioError.creditCardError === '' ? 'inputDesign' : 'inputDesign inputDesignError'}  
            placeholder={'Nº tarjeta de credito/debito'}  
            functionHandler={registerInputHandler}
            errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.creditCardError}</div>
            
            <div className ='registerButtonDesign' onClick = {()=>Registrarme()}>REGISTER</div>
        </div>
    );
};