import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import api from '../../api'
import './add.css'


export default function Edit(props) {
    const { id } = useParams()
    const [marca, setmarca] = useState('')
    const [tipo_vehiculo, settipovehiculo] = useState('')
    const [placa, setplaca] = useState('')

    const handleInputChange = event => {
        if (event.target.name === 'marca') setmarca(event.target.value)
        if (event.target.name === 'tipo_vehiculo') settipovehiculo(event.target.value)
        if (event.target.name === 'placa') setplaca(event.target.value)
    }

    const envio = async event => {
        event.preventDefault()
        const data = {
            marca: marca,
            tipo_vehiculo: tipo_vehiculo,
            placa: placa
        }
        const response = await api.crearVentas(data)
        alert(response.data.response)
        props.history.push("/vehiculo")
    }

    return (
        <div className="conta">
            <div className="title"><h1>Formulario Agregar</h1></div>
            <br></br>
            <div className="formulario">
                <Form onSubmit={envio} className="form">
                    <Form.Group controlId="formBasic">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" value={marca} name="marca" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Tipo de Vehiculo</Form.Label>
                        <Form.Control type="text" value={tipo_vehiculo} name="tipo_vehiculo" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Placa</Form.Label>
                        <Form.Control type="number" value={placa} name="placa" onChange={handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Agregar
                </Button>
                </Form>
            </div>
        </div>

    )
}