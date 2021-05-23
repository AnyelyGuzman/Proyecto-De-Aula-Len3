import React, {useEffect, useState} from "react"
import Table from 'react-bootstrap/Table'
import {useParams} from 'react-router-dom'
import Api from './api'


export default function Parcial(props) {
    const [carro, setcarro] = useState([])
    const {placa} = useParams()
    const getcarro = async() => {
        const response = await Api.obtenercarro(placa)
        console.log(response)
        setcarro(response.data)
    }
    useEffect (() => {
        getcarro()
    })
    return (
        <>
        <div className="cont">
        <div className="title">
            <h1>Cars Services</h1>
        </div>
            <div className="table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Carro</th>
                        <th>placa</th>
                        <th>servicio</th>
                        <th>atencion</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        carro.map(el => 
                            (
                                <tr>
                                    <td>{el.id_carro}</td>
                                    <td>{el.carro}</td>
                                    <td>{el.placa}</td>
                                    <td>{el.servicio}</td>
                                    <td>{el.fecha}</td>
                                </tr>
                            )
                        )
                    }
                    
                </tbody>
            </Table>
            </div>
            </div>
        </>
    )
}