import React, {useEffect, useState} from "react"
import './PersonalTransporte.css'
import Table from 'react-bootstrap/Table'
import MyNavbar from '../components/myNavbar'
import api from '../api'
import {Link} from 'react-router-dom'


export default function PersonalTransporte() {
    const [personal, setpersonal] = useState([])
    const edit = () => {
        console.log("holi")
    }
    const getPersonalTpe =  async () => {
    const response = await api.getPersonalTpe()
    setpersonal(response.data)
    console.log(response)
    }

    const eliminar= async id => {
        const response = await api.eliminarPersonalTpe(id)
        getPersonalTpe()
    }
    useEffect(() => {
        getPersonalTpe()
    }, [])

    return (
        <>
        <MyNavbar/>
        <div className="cont">
        <div className="title">
            <h1>PERSONAL DE TRANSPORTE</h1>
        </div>
        <div>
            <h2>Nueva Persona</h2>
            <Link to ="/personalTransporte/crear"><img src="./img/agregar.png" className="img_agregar"></img></Link>
        </div>
            <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre </th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Diercción</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        personal.map(el => {
                            return (
                                <tr>
                                    <td>{el.id_personal_transportador_admin}</td>
                                    <td>{el.nombre}</td>
                                    <td>{el.apellido}</td>
                                    <td>{el.telefono}</td>
                                    <td>{el.direccion}</td>
                                    <td> <Link to = {`/personalTransporte/${el.id_personal_transportador_admin}`}>
                                        <img src="./img/editar.png" onClick={edit} className="img_editar"></img>
                                    </Link></td>
                                    <td onClick={() => eliminar(el.id_personal_transportador_admin)}><img src="./img/eliminar.png" className="img_editar"></img> </td>

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