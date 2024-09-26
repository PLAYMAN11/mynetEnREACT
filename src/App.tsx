import React from 'react';
import styles from './App.module.css';
import Header from './modules/Header'

function App() {
  return (
      <div className="App">
        <Header></Header>
        <Contenido></Contenido>

      </div>
  );
}

function Contenido() {
    return (
    <div className={styles.Perfil}>
        <div className="perfil">
            <p className="tituloperfil">Perfil </p>
            <hr/>
            <div className="divisoresperfil">
                <div>
                    <label>Usuario</label>
                    <input type="text" placeholder="Usuario" className="datosperfil " id="usuarioPerfil" readOnly/>
                </div>
                <div className="sizedeinput">
                    <label>Correo Electronico</label>
                    <input type="email" placeholder="Correo Electronico" className="datosperfil"
                           id="CorreoElectronicoPerfil"/>
                </div>
            </div>
            <div className="divisoresperfil">
                <div className="sizedeinput">
                    <label>Nombre(s)</label>
                    <input type="text" placeholder="Nombre(s)" className="datosperfil" id="NombresPerfil"/>
                </div>
                <div className="sizedeinput">
                    <label>Apellido(s)</label>
                    <input type="text" placeholder="Apellido(s)" className="datosperfil" id="ApellidosPerfil"/>
                </div>
            </div>
            <div className="divisoresperfil">
                <div className="sizedeinput">
                    <label>Notas</label>
                    <textarea name="Sobre mi" className="datosperfil2" placeholder="Escribe aqui..."
                              id="SobreMi"></textarea>
                </div>
            </div>
            <div className="divisiondebotonperfil">
                <button className="botonperfil">Guardar</button>
                <button className="botonperfil" id="logoutButton">Cerrar sesion</button>
            </div>
        </div>
    </div>
    )}


export default App;
