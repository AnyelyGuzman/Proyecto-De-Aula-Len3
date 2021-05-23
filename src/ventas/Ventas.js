import React, { useEffect, useState } from "react"
import './Ventas.css'
import Table from 'react-bootstrap/Table'
import MyNavbar from '../components/myNavbar'
import api from '../api'
import { Link } from 'react-router-dom'
import AnyChart from 'anychart-react'

export default function Ventas() {
    const [ventas, setventas] = useState([])
    const [complexSettings, setComplexSettings] = useState({
        width: 400,
        height: 300,
        type: 'column',
        data: [3,4,6,2,6,3,9],
        title: 'Ventas',
        yAxis: [1, {
            orientation: 'right',
            enabled: true,
            labels: {
                format: '{%Value}{decimalPoint:\\,}',
                fontColor: 'blue'
            }
        }],
        legend: {
            background: 'lightgreen 0.4',
            padding: 0
        },
    })


    const edit = () => {
        console.log("holi")
    }
    
    const getVentas = async () => {
        const response = await api.getVentas()
        if(response && response.data)setventas(response.data)
    }

    const getVentasReportes = async () => {
        const response = await api.getVentasReportes()
        if(response && response.data) {
            setComplexSettings({ ...complexSettings, data: response.data.map(e => ({ x: e.mes, value: e.total }) ) })
        }
    }

    const eliminar = async id => {
        const response = await api.eliminarVentas(id)
        getVentas()
    }

    useEffect(() => { getVentas() }, [])

    useEffect(() => { getVentasReportes() }, [])

    return (
        <>
            <MyNavbar />
            <div className="cont">
                <div className="title">
                    <h1>VENTAS</h1>
                </div>
                <div>
                    <h2>Nueva Venta</h2>
                    <Link to="/ventas/crear"><img src="./img/agregar.png" className="img_agregar"></img></Link>
                </div>
                <div className="table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Nombre Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Mes</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ventas.map(el => {
                                    return (
                                        <tr>
                                            <td>{el.id_ventas}</td>
                                            <td>{el.producto}</td>
                                            <td>{el.cantidad}</td>
                                            <td>${el.precio}</td>
                                            <td>{el.mes}</td>
                                            <td> <Link to={`/ventas/${el.id_ventas}`}>
                                                <img src="./img/editar.png" onClick={edit} className="img_editar"></img>
                                            </Link></td>
                                            <td onClick={() => eliminar(el.id_ventas)}><img src="./img/eliminar.png" className="img_editar"></img> </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                <AnyChart
                    {...complexSettings}
                />
            </div>
        </>
    )
}
