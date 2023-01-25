
import { decodeToken } from "react-jwt";

export const Decoder = (token) => {

    const decodedToken = decodeToken(token);

    return decodedToken;
    
}

export const poster_default = 'https://image.tmdb.org/t/p/original/';

export const errorCheck = (name, value) => {

    switch (name) {

        case 'name':
        case 'surname':
        case 'country':

            if (! /[a-z]/gi.test(value) ) {
                return ("Formato de texto NO válido");
                
            } else {
                return '';
            };

        case 'email':

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
                return "Email en formato NO válido";
            } else {
                return '';
            }

        case 'creditcard':

            if (! /(?=.*?[0-8])/.test(value) ) {
                return "Tarjeta de Credito/Debito incorrecta";
            } else {
                return "";
            }

        case 'password':

            if (value.length < 8) {
                return "Escribe al menos 6 caracteres"
            } else {

                //Checking the password format....

                if (! /[\d()+-]/g.test(value)) {
                    return "Password en formato NO válido";
                } else {
                    return "";
                }
            }

        default:
            console.log("no entro en los if");
            break;

    }

}