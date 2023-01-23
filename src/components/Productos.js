import React, { useEffect, useState } from 'react'
import './Productos.css';
import noImagen from './../assets/images/no-imagen.jpg';

export default function Productos(props) {
    const [listaProductos, setListaProductos] = useState([]);
    //console.log(props)
    useEffect(() => {
        leerServicio(props.categoriaProductos);
    }, [props.categoriaProductos]);

    const leerServicio = (idcategoria) => {
        const rutaServicio = "http://localhost:8080/servicios.campus.pe/productos.php?idcategoria=" + idcategoria;
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setListaProductos(data);
            });
    }

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Producto</th>
                        <th className="text-end">Precio S/</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProductos.map(item =>
                        <tr key={item.idproducto}>
                            <td>{item.idproducto}</td>
                            <td>{item.nombre}</td>
                            <td className="text-end">{parseFloat(item.precio).toFixed(2)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const dibujarCuadricula = () => {
        return (

            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4" id="cards-productos">

                {listaProductos.map(item =>
                    <div className="col" key={item.idproducto}>
                        <div className="card">
                            <img src={ item.imagenchica === null
                                ? noImagen
                                : "https://servicios.campus.pe/" + item.imagenchica} 
                                
                                className="card-img-top" alt="..." />
                            
                            <div className="card-body">
                                <h6 className="card-title">{item.nombre}</h6>
                                <p className="card-text">S/ {parseFloat(item.precio).toFixed(2)}
                                
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        )
    }

    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                    {dibujarCuadricula()}
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    {dibujarTabla()}
                </div>
            </div>
        </>
    )
}
