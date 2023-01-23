import React, { useEffect, useState } from 'react'
import Productos from '../components/Productos';

export default function Tienda() {
    const [listaCategorias, setListaCategorias] = useState([]);
    const [categoriaSeleccionda, setCategoriaSeleccionada] = useState([]);

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        const rutaServicio = "http://localhost:8080/servicios.campus.pe/categorias.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setListaCategorias(data);
            });
    }

    const seleccionarCategoria = (event, item) => {
        //console.log(item);
        setCategoriaSeleccionada(item);

        var itemsLista = document.querySelectorAll("#lista-categorias li");
        itemsLista.forEach( item => {
            item.classList.remove("active");
        })

        event.currentTarget.classList.add("active");
        //event.currentTarget hace referencia al objeto que recibió el evento
        //classList.add("active") indica que a la lista de clases se está añadiendo 
        //la clase active
    }


    return (
        <section id="tienda" className='padded'>
            <div className="container">
                <h2>Tienda</h2>
                <div className="row">
                    <div className="col-md-3">
                    <ul className="list-group" id="lista-categorias">

                    {listaCategorias.map(item =>
                        <li className="list-group-item" key={item.idcategoria} 
                            onClick = {(event) => seleccionarCategoria(event, item)}>
                            <h5>{item.nombre}</h5>
                            <p>{item.descripcion}</p>
                        </li>
                    )}

                    </ul>
                    </div>
                    <div className="col-md-9">
                        <h3>{categoriaSeleccionda.nombre}</h3>
                        <small>{categoriaSeleccionda.descripcion}</small>
                        <Productos categoriaProductos = {categoriaSeleccionda.idcategoria} />
                    </div>
                </div>
            </div>
        </section>
    )
}
