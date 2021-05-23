import React, {useEffect, useState} from "react"
import './ProPtesLlegar.css'
import Table from 'react-bootstrap/Table'
import MyNavbar from '../components/myNavbar'
import api from '../api'
import {Link} from 'react-router-dom'


export default function ProPtesLlegar() {
    const [prollegar, setprollegar] = useState([])
    const edit = () => {
        console.log("holi")
    }
    const getProPteLle =  async () => {
    const response = await api.getProPteLle()
    setprollegar(response.data)
    console.log(response)
    }

    const eliminar= async id => {
        const response = await api.eliminarProPteLle(id)
        getProPteLle()
    }
    useEffect(() => {
        getProPteLle()
    }, [])
    return (
        <>
         <MyNavbar/>
        <div className="cont">
        <div className="title">
            <h1>PRODUCTOS PENDIENTES POR LLEGAR</h1>
        </div>
        <div>
            <h2>Nuevo Producto</h2>
            <Link to ="/proPtesLlegar/crear"><img src="./img/agregar.png" className="img_agregar"></img></Link>
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
                        prollegar.map(el => {
                            return (
                                <tr>
                                    <td>{el.id_pro_ptes_llegar_admin}</td>
                                    <td>{el.nombre_pro}</td>
                                    <td>{el.cantidad}</td>
                                    <td>${el.precio}</td>
                                    <td> <Link to = {`/proPtesLlegar/${el.id_pro_ptes_llegar_admin}`}>
                                        <img src="./img/editar.png" onClick={edit} className="img_editar"></img>
                                    </Link></td>
                                    <td onClick={() => eliminar(el.id_pro_ptes_llegar_admin)}><img src="./img/eliminar.png" className="img_editar"></img> </td>

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