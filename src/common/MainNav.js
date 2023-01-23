import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                        
            <div className="container">
                <Link to ="/">
            <img to="/inicio" src="https://litho.themezaa.com/wp-content/uploads/2020/09/logo-green-black.png" id="logo1" className="d-block" />
            </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" padding-left="40px">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                        <li className="nav-item">
                            <Link className="nav-link" to="/proveedores">Proveedores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/empleados">Empleados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tienda">Tienda</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
