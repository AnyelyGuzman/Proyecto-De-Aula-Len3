import React, {useEffect, useState} from "react"
import './Ganancias.css'
import Table from 'react-bootstrap/Table'
import MyNavbar from '../components/myNavbar'
import api from '../api'
import {Link} from 'react-router-dom'

import AnyChart from 'anychart-react'


export default function Ganancias() {
    const [ganancias, setganancias] = useState([])

    const [complexSettings, setComplexSettings] = useState({
        width: 400,
        height: 300,
        type: 'column',
        data: [3,4,6,2,6,3,9],
        title: 'Ganancias',
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
    const getGanancias =  async () => {
    const response = await api.getGanancias()
    setganancias(response.data)
    console.log(response)
    }

    const getGananciasReportes = async () => {
        const response = await api.getGananciasReportes()
        if(response && response.data && response.data.length>0) { 
            setComplexSettings({ ...complexSettings, data: response.data.map(e => ({ x: e.mes, value: e.total }) ) })
        }
    }

    const eliminar= async id => {
        const response = await api.eliminarGanancia(id)
        getGanancias()
    }
    useEffect(() => {
        getGanancias()
    }, [])
    
    useEffect(() => {
        getGananciasReportes()
    }, [])

    return (
        <>
        <MyNavbar/>
        <div className="cont">
        <div className="title">
            <h1>GANANCIAS</h1>
        </div>
        <div>
            <h2>Nueva Ganancia</h2>
            <Link to ="/ganancias/crear"><img src="./img/agregar.png" className="img_agregar"></img></Link>
        </div>
            <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Producto</th>
                        <th>Mes</th>
                        <th>Ganancia Total</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        ganancias.map(el => {
                            return (
                                <tr>
                                    <td>{el.id_ganancias_admin}</td>
                                    <td>{el.producto}</td>
                                    <td>{el.mes}</td>
                                    <td>{el.ganancia_total}</td>
                                    <td> <Link to = {`/ganancias/${el.id_ganancias_admin}`}>
                                        <img src="./img/editar.png" onClick={edit} className="img_editar"></img>
                                    </Link></td>
                                    <td onClick={() => eliminar(el.id_ganancias_admin)}><img src="./img/eliminar.png" className="img_editar"></img> </td>

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