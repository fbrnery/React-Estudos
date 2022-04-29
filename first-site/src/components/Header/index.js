import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div>
            <nav className="nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">App Academia</a>
                        <div className="navbar">   
                        <Link to="/Home"> Home </Link>
                        <Link to="/Matricula"> Matricule-se </Link>
                        <Link to="/Dicas"> Dicas de saúde </Link>
                        <Link to="/Fale"> Fale Conosco </Link>
                        </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
