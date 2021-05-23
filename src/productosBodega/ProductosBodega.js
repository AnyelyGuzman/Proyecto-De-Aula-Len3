import React, {useEffect, useState} from "react"
import './ProductosBodega.css'
import Table from 'react-bootstrap/Table'
import MyNavbar from '../components/myNavbar'
import api from '../api'
import {Link} from 'react-router-dom'


export default function ProductosBodega() {
    const [productosBodega, setproductosBodega] = useState([])
    const edit = () => {
        console.log("holi")
    }
    const getProductosB =  async () => {
    const response = await api.getProductosB()
    setproductosBodega(response.data)
    console.log(response)
    }

    const eliminar= async id => {
        const response = await api.eliminarProductosB(id)
        getProductosB()
    }
    useEffect(() => {
        getProductosB()
    }, [])
    return (
        <>
        <MyNavbar/>
        <div className="cont">
        <div className="title">
            <h1>PRODUCTOS EN BODEGA</h1>
        </div>
        <div>
            <h2>Nuevo Producto</h2>
            <Link to ="/productosBodega/crear"><img src="./img/agregar.png" className="img_agregar"></img></Link>
        </div>
            <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        productosBodega.map(el => {
                            return (
                                <tr>
                                    <td>{el.id_productos}</td>
                                    <td>{el.nombre}</td>
                                    <td>{el.cantidad}</td>
                                    <td>${el.precio}</td>
                                    <td> <Link to = {`/productosBodega/${el.id_productos_bodega}`}>
                                        <img src="./img/editar.png" onClick={edit} className="img_editar"></img>
                                    </Link></td>
                                    <td onClick={() => eliminar(el.id_productos_bodega)}><img src="./img/eliminar.png" className="img_editar"></img> </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            </div>
            </div>
        </>
    )
}