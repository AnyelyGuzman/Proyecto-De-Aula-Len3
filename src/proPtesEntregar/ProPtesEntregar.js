import React, {useEffect, useState} from "react"
import './ProPtesEntregar.css'
import Table from 'react-bootstrap/Table'
import MyNavbar from '../components/myNavbar'
import api from '../api'
import {Link} from 'react-router-dom'



export default function ProPtesEntregar() {
    const [proEntregar, setproentregar] = useState([])
    const edit = () => {
        console.log("holi")
    }
    const getProPteEnt =  async () => {
    const response = await api.getProPteEnt()
    setproentregar(response.data)
    console.log(response)
    }

    const eliminar= async id => {
        const response = await api.eliminarProPteEnt(id)
        getProPteEnt()
    }
    useEffect(() => {
        getProPteEnt()
    }, [])
    return (
        <>
        <MyNavbar/>
        <div className="cont">
        <div className="title">
            <h1>PRODUCTOS PENDIENTES POR ENTREGAR</h1>
        </div>
        <div>
            <h2>Nuevo Producto</h2>
            <Link to ="/proPtesEntregar/crear"><img src="./img/agregar.png" className="img_agregar"></img></Link>
        </div>
            <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        proEntregar.map(el => {
                            return (
                                <tr>
                                    <td>{el.id_pro_ptes_entregar_admin}</td>
                                    <td>{el.nombre_pro}</td>
                                    <td>{el.cantidad}</td>
                                    <td>${el.precio}</td>
                                    <td> <Link to = {`/proPtesEntregar/${el.id_pro_ptes_entregar_admin}`}>
                                        <img src="./img/editar.png" onClick={edit} className="img_editar"></img>
                                    </Link></td>
                                    <td onClick={() => eliminar(el.id_pro_ptes_entregar_admin)}><img src="./img/eliminar.png" className="img_editar"></img> </td>

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