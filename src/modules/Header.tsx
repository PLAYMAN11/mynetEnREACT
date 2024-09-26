import React, { useState } from "react";
import styles from './Header.module.css';

function Header() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const displayMenu = () => {
        setIsDisplayed(!isDisplayed);
    };

    return (
        <header className={styles.Header}>
            <button className="activadorHeaderMain" onClick={displayMenu}>
                <div className={styles.linea}></div>
                <div className={styles.linea}></div>
                <div className={styles.linea}></div>
            </button>
            <nav id="Despl3egable">
                {isDisplayed ? (
                        <div>
                            <div className="navs"><a href="">Linea de tiempo</a></div>
                            <div className="navs"><a href="">Servicios</a></div>
                            <div className="navs"><a href="">Tu dinero</a></div>
                            <div className="navs"><a href="">Ajustar Ingresos</a></div>
                            <div className="navs"><a href="">Ajustar Egresos</a></div>
                            <div className="navs"><a href="">Perfil</a></div>
                        </div>
                    ) : null}

            </nav>
            <div className="Foto">
                <img src="service.png" alt="Logo"/>
            </div>
        </header>
    );
}

export default Header;
