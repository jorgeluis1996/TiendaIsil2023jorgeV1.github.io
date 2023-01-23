import React, { useEffect, useState } from 'react'

export default function Empleados() {
    const [listaEmpleados, setListaEmpleados] = useState([]);

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        const rutaServicio = "https://servicios.campus.pe/empleados.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setListaEmpleados(data);
            });
    }
    return (
        <section id="empleados" className='padded'>
            <div className="container">
                <h2>Empleados</h2>
                <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">

                {listaEmpleados.map(item =>
                    <div className="col" key={item.idempleado}>
                        <div className="card">
                            <img src={"https://servicios.campus.pe/fotos/" + item.foto} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.nombres} {item.apellidos}</h5>
                                    <p className="card-text">{item.cargo}</p>
                                </div>
                        </div>
                    </div>
                )}

                </div>
            </div>
        </section>
    )
}
