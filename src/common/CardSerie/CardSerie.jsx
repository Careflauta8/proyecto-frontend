
import React from 'react';
import { poster_default } from '../../services/utiles';
import './CardSerie.css';

export const CardSerie = ({serie}) => {
    
    return (
        <div className='cardSerieDesign'>
            <div className='text'>{serie.title !== '' ? serie.title : "Titulo no disponible"}</div>
            <div><img className='posterDesign' src={`${poster_default}${serie.poster_path}`}/></div>
            <div>{serie.year !== '' ? serie.year : "TBA"}</div>
        </div>
    )
}