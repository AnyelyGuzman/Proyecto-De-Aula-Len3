import React, {useEffect, useState} from "react"
import './Perdidas.css'
import Table from 'react-bootstrap/Table'
import MyNavbar from "../components/myNavbar"
import api from '../api'
import {Link} from 'react-router-dom'
import AnyChart from 'anychart-react'


export default function Perdidas() {
    const [perdidas, setperdidas] = useState([])

    const [complexSettings, setComplexSettings] = useState({
        width: 400,
        height: 300,
        type: 'column',
        data: [3,4,6,2,6,3,9],
        title: 'Perdidas',
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
    const getPerdidas =  async () => {
    const response = await api.getPerdidas()
    setperdidas(response.data)
    console.log(response)
    }


    const getPerdidasReportes = async () => {
        const response = await api.getPerdidasReportes()
        if(response && response.data) {
            setComplexSettings({ ...complexSettings, data: response.data.map(e => ({ x: e.mes, value: e.total }) ) })
        }
    }

    const eliminar= async id => {
        const response = await api.eliminarPerdida(id)
        getPerdidas()
    }
    useEffect(() => {
        getPerdidas()
    }, [])

    useEffect(() => { getPerdidasReportes() }, [])
    return (
        <>
        <MyNavbar/>
        <div className="cont">
        <div className="title">
            <h1>PERDIDAS</h1>
        </div>
        <div>
            <h2>Nueva Perdida</h2>
            <Link to ="/perdidas/crear"><img src="./img/agregar.png" className="img_agregar"></img></Link>
        </div>
            <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>   
                        <th>id</th>
                        <th>Producto</th>
                        <th>Mes</th>
                        <th>Perdida Total</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        perdidas.map(el => {
                            return (
                                <tr>
                                    <td>{el.id_perdidas_admin}</td>
                                    <td>{el.producto}</td>
                                    <td>{el.mes}</td>
                                    <td>{el.perdida_total}</td>
                                    <td> <Link to = {`/perdidas/${el.id_perdidas_admin}`}>
                                        <img src="./img/editar.png" onClick={edit} className="img_editar"></img>
                                    </Link></td>
                                    <td onClick={() => eliminar(el.id_perdidas_admin)}><img src="./img/eliminar.png" className="img_editar"></img> </td>

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