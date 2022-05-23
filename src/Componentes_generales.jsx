import React from "react";
import {Encabezado} from './Encabezado';
import {Tabla} from './Tabla';
import {Formulario} from './Formulario';
import {Boton} from './Boton';
import {Pie} from './Pie';

export function Aplicacion(){
    return (
        <React.Fragment>
            <Encabezado/>
            <Tabla/>
            <Formulario/>
            <Tabla/>
            <Boton/>
            <Pie/>
            
        </React.Fragment>
    )
} 