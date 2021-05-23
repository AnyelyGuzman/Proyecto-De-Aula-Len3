import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from '../../api'


export default function Edit(props) {
    const { id } = useParams()
    const [marca, setmarca] = useState('')
    const [tipo_vehiculo, settipovehiculo] = useState('')
    const [placa, setplaca] = useState('')

    const getVehiculoId = async () => {
        const response = await api.getVehiculoId(id)
        console.log(response)
        setmarca(response.data[0].marca)
        settipovehiculo(response.data[0].tipo_vehiculo)
        setplaca(response.data[0].placa)
    }
    useEffect(() => {
        getVehiculoId()
    })

    const handleInputChange = event => {
        if (event.target.name === 'marca') setmarca(event.target.value)
        if (event.target.name === 'tipo_vehiculo') settipovehiculo(event.target.value)
        if (event.target.name === 'placa') setplaca(event.target.value)
    }

    const envio = async event => {
        event.preventDefault()
        const data = {
            id_vehiculo_admin: id,
            marca: marca,
            tipo_vehiculo: tipo_vehiculo,
            placa: placa
        }
        const response = await api.editarVehiculo(data)
        alert(response.data.response)
        props.history.push("/vehiculo")
    }

    return (
        <>
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
                    Editar
                </Button>
            </Form>
        </>

    )
}