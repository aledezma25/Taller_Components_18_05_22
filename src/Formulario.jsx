import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Formulario() {
  return (
        <><form>
          <label for="exampleInputEmail1">Correo</label>
          <input type="email" id="exampleInputEmail1"></input>
          <label for="exampleInputpass">Contraseña</label>
          <input type="text" id="exampleInputpass"></input><button type="submit">Enviar</button>
      </form><br></br></>
  )
}
