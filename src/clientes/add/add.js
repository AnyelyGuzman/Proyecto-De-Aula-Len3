import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import api from '../../api'
import './add.css'


export default function Edit(props) {
    const { id } = useParams()
    const [nombre, setnombre] = useState('')
    const [apellido, setapellido] = useState('')
    const [telefono, settelefono] = useState('')

    const handleInputChange = event => {
        if (event.target.name === 'nombre') setnombre(event.target.value)
        if (event.target.name === 'apellido') setapellido(event.target.value)
        if (event.target.name === 'telefono') settelefono(event.target.value)
    }

    const envio = async event => {
        event.preventDefault()
        const data = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
        }
        const response = await api.crearCliente(data)
        alert(response.data.response)
        props.history.push("/clientes")
    }

    return (
        <div className="conta">
            <div className="title"><h1>Formulario Agregar</h1></div>
            <br></br>
            <div className="formulario">
                <Form onSubmit={envio} className="form">
                <Form.Group controlId="formBasic">
                    <Form.Label>Nombre Cliente</Form.Label>
                    <Form.Control type="text" value={nombre} name="nombre" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formBasic">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" value={apellido} name="apellido" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formBasic">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="number" value={telefono} name="telefono" onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
    </div>

    )
}