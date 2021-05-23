import React, {useEffect, useState} from "react"
import './proveedores.css'
import Table from 'react-bootstrap/Table'
import MyNavbar from '../components/myNavbar'
import api from '../api'
import {Link} from 'react-router-dom'


export default function Proveedores() {
    const [proveedores, setproveedores] = useState([])
    const edit = () => {
        console.log("holi")
    }
    const getProveedores =  async () => {
    const response = await api.getProveedores()
    setproveedores(response.data)
    console.log(response)
    }

    const eliminar= async id => {
        const response = await api.eliminarProveedor(id)
        getProveedores()
    }
    useEffect(() => {
        getProveedores()
    }, [])

    return (
        <>
        <MyNavbar/>
        <div className="cont" >
        <div className="title">
            <h1>PROVEEDORES</h1>
        </div>
        <div>
            <h2>Nuevo Proveedor</h2>
            <Link to ="/proveedores/crear"><img src="./img/agregar.png" className="img_agregar"></img></Link>
        </div>
            <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre Proveedor</th>
                        <th>Producto</th>
                        <th>Mes</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        proveedores.map(el => {
                            return (
                                <tr>
                                    <td>{el.id_proveedores_admin}</td>
                                    <td>{el.nombre_proveedor}</td>
                                    <td>{el.producto}</td>
                                    <td>{el.mes}</td>
                                    <td>{el.cantidad}</td>
                                    <td>${el.precio}</td>
                                    <td> <Link to = {`/proveedores/${el.id_proveedores_admin}`}>
                                        <img src="./img/editar.png" onClick={edit} className="img_editar"></img>
                                    </Link></td>
                                    <td onClick={() => eliminar(el.id_proveedores_admin)}><img src="./img/eliminar.png" className="img_editar"></img> </td>

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