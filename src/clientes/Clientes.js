import React, { useState, useEffect } from "react"
import './Clientes.css'
import Table from 'react-bootstrap/Table'
import MyNavbar from '../components/myNavbar'
import api from '../api'
import { Link } from 'react-router-dom'


export default function Clientes() {
    const [clientes, setclientes] = useState([])

    const getclientes = async () => {
        const response = await api.getclientes()
        setclientes(response.data)
        console.log(response)
    }

    const eliminar = async id => {
        const response = await api.eliminarCliente(id)
        getclientes()
    }

    useEffect(() => {
        getclientes()
    }, [])

    return (
        <>
            <MyNavbar />
            <div className="cont">
                <div className="title">
                    <h1>CLIENTES</h1>
                </div>
                <div>
                    <h2>Nuevo Cliente</h2>
                    <Link to="/clientes/crear"><img src="./img/agregar.png" className="img_agregar"></img></Link>
                </div>
                <div className="table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre Cliente</th>
                                <th>Apellido</th>
                                <th>Telefono</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientes.map(el => {
                                    return (
                                        <tr>
                                            <td>{el.id_clientes_admin}</td>
                                            <td>{el.nombre}</td>
                                            <td>{el.apellido}</td>
                                            <td>{el.telefono}</td>
                                            <td> <Link to={`/clientes/${el.id_clientes_admin}`}>
                                                <img src="./img/editar.png" className="img_editar"></img>
                                            </Link></td>
                                            <td onClick={() => eliminar(el.id_clientes_admin)}><img src="./img/eliminar.png" className="img_editar"></img> </td>
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