
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import { postRegister } from '../../../services/apiCalls';

//RDX imports......
import { useSelector, useDispatch } from "react-redux";
import { userData, register } from '../userSlice';

import './Register.css';

export const Register = () => {

        //Instancia de métodos de Redux
        const dispatch = useDispatch();

        const datosReduxUsuario = useSelector(userData);

    //creamos el hooks
    const [usuario, setUsuario] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        errors: [],
        errMes: ''
    })

    //Variables y constantes a utilizar
    const navigate = useNavigate();

    const registerInputHandler = (e) => {

        //Manejo la entrada de datos en los input y voy actualizando el hook usuario a medida
        //que los datos se van introduciendo
        if(usuario.name.length !== 0) {
            usuario.errors.push('name')
            setUsuario({
                ...usuario,
                errMes: 'Debe rellenar el nombre'
            })
        }
        if(usuario.surname.length !== 0) {
            usuario.errors.push('surname')
            setUsuario({
                ...usuario,
                errMes: 'Debe rellenar el apellido'
            })
        }
        if(usuario.email.length !== 0) {
            usuario.errors.push('email')
            setUsuario({
                ...usuario,
                errMes: 'Debe rellenar el email'
            })
        }
        if(usuario.password.length !== 0) {
            usuario.errors.push('password')
            setUsuario({
                ...usuario,
                errMes: 'Debe rellenar la contraseña'
            })
        }

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

                    //Finalmente, guardo en RDX....

                    //Guardo mediante la ACCIÓN Register, los datos del usuario.
                    dispatch(Register({userPass: userPass}));


                    //Finalmente, navego y te llevo a home en casi un segundo de delay
                 
                    console.log(resultado);

                    setTimeout(()=>{
                        navigate("/")
                    },750);
                }
            )
            .catch(error => console.log(error));
    }
    useEffect(()=>{
        if(datosReduxUsuario.userPass !== ''){
            navigate("/register");
        }
    },[])

    return (
        <div className='registerDesign'>
            {/*<pre>{JSON.stringify(usuario, null, 2)}</pre>*/}
            <InputText 
            type={'text'} 
            name={'name'} 
            placeholder={'Escribe tu nombre'} 
            functionHandler={registerInputHandler}
            />
             <InputText 
            type={'text'} 
            name={'name'} 
            placeholder={'Escribe tu apellido'} 
            functionHandler={registerInputHandler}
            />
            <InputText 
            type={'email'} 
            name={'email'} 
            placeholder={'Escribe un correo electronico'} 
            functionHandler={registerInputHandler}
            />
            <InputText 
            type={'text'} 
            name={'password'} 
            placeholder={'Crea una contraseña'}  
            functionHandler={registerInputHandler}
            />
            <div className ='registerButtonDesign' onClick = {()=>Registrarme()}>REGISTER</div>
        </div>
    );
};