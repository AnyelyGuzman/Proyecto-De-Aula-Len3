import React, {useEffect, useState} from "react"
import './Vehiculo.css'
import Table from 'react-bootstrap/Table'
import MyNavbar from '../components/myNavbar'
import api from '../api'
import {Link} from 'react-router-dom'

export default function Vehiculo() {
    const [vehiculo, setvehiculo] = useState([])
    const edit = () => {
        console.log("holi")
    }
    const getVehiculo =  async () => {
    const response = await api.getVehiculo()
    setvehiculo(response.data)
    console.log(response)
    }

    const eliminar= async id => {
        const response = await api.eliminarVehiculo(id)
        getVehiculo()
    }
    useEffect(() => {
        getVehiculo()
    }, [])
    return (
        <>
        <MyNavbar/>
        <div className="cont">
        <div className="title">
            <h1>Vehiculos</h1>
        </div>
        <div>
            <h2>Nuevo Vehiculo</h2>
            <Link to ="/vehiculo/crear"><img src="./img/agregar.png" className="img_agregar"></img></Link>
        </div>
            <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Marca</th>
                        <th>Tipo de Vehiculo</th>
                        <th>Placa</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        vehiculo.map(el => {
                            return (
                                <tr>
                                    <td>{el.id_vehiculo_admin}</td>
                                    <td>{el.marca}</td>
                                    <td>{el.tipo_vehiculo}</td>
                                    <td>{el.placa}</td>
                                    <td> <Link to = {`/vehiculo/${el.id_vehiculo_admin}`}>
                                        <img src="./img/editar.png" onClick={edit} className="img_editar"></img>
                                    </Link></td>
                                    <td onClick={() => eliminar(el.id_vehiculo_admin)}><img src="./img/eliminar.png" className="img_editar"></img> </td>

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