import React, { useEffect, useState } from 'react'
import './Envios.css';

export default function Envios() {
    const [listaEnvios, setListaEnvios] = useState([]);

    useEffect(() => {
        leerServicio();
    },[])

    const leerServicio = () => {
        const rutaServicio = "http://localhost:8080/servicios.campus.pe/servicioempleados.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setListaEnvios(data);
            });
    }

    return (
        <section id="envios" className='padded'>
            <div className="container">
                <div className="row">
                    
                    <div className="col">

                    <div className="col">
                        <h2 id='envio-titulo'>EMPRESAS DE ENVÍO</h2>
                    </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombres</th>
                                    <th>Cargos</th>
                                </tr>
                            </thead>
                            <tbody>
                            {listaEnvios.map(item =>
                                    <tr key={item.idempleado}>
                                        <td>{item.idempleado}</td>
                                        <td>{item.nombres}</td>
                                        <td>{item.cargo}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
