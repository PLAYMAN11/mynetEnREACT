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
            <h1 className="tituloperfil">Perfil </h1>
            <hr/>
            <div className="divisoresperfil">
                <div className='divisionusuario'>
                    <label>Usuario</label>
                    <input type="text" placeholder="Usuario" className={styles.datosperfil} id="usuarioPerfil" readOnly/>
                </div>
                <div className="sizedeinput">
                    <label>Correo Electronico</label>
                    <input type="email" placeholder="Correo Electronico" className={styles.datosperfil}
                           id="CorreoElectronicoPerfil"/>
                </div>
            </div>
            <div className="divisoresperfil">
                <div className="sizedeinput">
                    <label>Nombre(s)</label>
                    <input type="text" placeholder="Nombre(s)" className={styles.datosperfil} id="NombresPerfil"/>
                </div>
                <div className="sizedeinput">
                    <label>Apellido(s)</label>
                    <input type="text" placeholder="Apellido(s)" className={styles.datosperfil} id="ApellidosPerfil"/>
                </div>
            </div>
            <div className="divisoresperfil">
                <div className="sizedeinput">
                    <label>Notas</label><br/>
                    <textarea name="Sobre mi" className={styles.datosperfil2} placeholder="Escribe aqui..."
                              id="SobreMi"></textarea>
                </div>
            </div>
            <div className={styles.divisiondebotonperfil}>
                <button className="botonperfil">Guardar</button>
                <button className="botonperfil" id="logoutButton">Cerrar sesion</button>
            </div>
        </div>
    </div>
    )}


export default App;
