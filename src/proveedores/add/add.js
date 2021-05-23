import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import api from '../../api'
import './add.css'


export default function Edit(props) {
    const { id } = useParams()
    const [nombre, setnombre] = useState('')
    const [producto, setproducto] = useState('')
    const [mes, setmes] = useState('')
    const [cantidad, setcantidad] = useState('')
    const [precio, setprecio] = useState('')

    const handleInputChange = event => {
        if (event.target.name === 'nombre') setnombre(event.target.value)
        if (event.target.name === 'producto') setproducto(event.target.value)
        if (event.target.name === 'mes') setmes(event.target.value)
        if (event.target.name === 'cantidad') setcantidad(event.target.value)
        if (event.target.name === 'precio') setprecio(event.target.value)
    }

    const envio = async event => {
        event.preventDefault()
        const data = {
            nombre_proveedor: nombre,
            producto: producto,
            mes: mes,
            cantidad: cantidad,
            precio: precio
        }
        const response = await api.crearProveedor(data)
        alert(response.data.response)
        props.history.push("/proveedores")
    }

    return (
        <div className="conta">
            <div className="title"><h1>Formulario Agregar</h1></div>
            <br></br>
            <div className="formulario">
                <Form onSubmit={envio} className="form">
                    <Form.Group controlId="formBasic">
                        <Form.Label>Nombre Proveedor</Form.Label>
                        <Form.Control type="text" value={nombre} name="nombre" onChange={handleInputChange} placeholder="Nombre Proveedor" />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control type="text" value={producto} name="producto" onChange={handleInputChange} placeholder="Producto" />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Mes</Form.Label>
                        <Form.Control type="text" value={mes} name="mes" onChange={handleInputChange} placeholder="Mes" />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="number" value={cantidad} name="cantidad" onChange={handleInputChange} placeholder="Cantidad" />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="number" value={precio} name="precio" onChange={handleInputChange} placeholder="Precio" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Agregar
                </Button>
                </Form>
            </div>
        </div>

    )
}