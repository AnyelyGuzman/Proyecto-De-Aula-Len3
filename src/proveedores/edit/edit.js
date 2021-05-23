import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from '../../api'
import './edit.css'

export default function Edit(props) {
    const { id } = useParams()

    const [nombre, setnombre] = useState('')
    const [producto, setproducto] = useState('')
    const [mes, setmes] = useState('')
    const [cantidad, setcantidad] = useState('')
    const [precio, setprecio] = useState('')

    const getProveedoresId = async () => {
        const response = await api.getProveedoresId(id)
        console.log(response)
        setnombre(response.data[0].nombre_proveedor)
        setproducto(response.data[0].producto)
        setmes(response.data[0].mes)
        setcantidad(response.data[0].cantidad)
        setprecio(response.data[0].precio)
    }

    useEffect(() => {
        getProveedoresId()
    }, [])

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
            id_proveedores_admin: id,
            nombre_proveedor: nombre,
            producto: producto,
            mes: mes,
            cantidad: cantidad,
            precio: precio
        }
        const response = await api.editarProveedor(data)
        alert(response.data.response)
        props.history.push("/proveedores")
    }

    return (
        <div className="cabe">
            <div className="title"><h1>Formulario Editar</h1></div>
            <br></br>
            <div className="formulario">
                <Form onSubmit={envio} className="form">
                    <Form.Group controlId="formBasic">
                        <Form.Label>Nombre Proveedor</Form.Label>
                        <Form.Control type="text" value={nombre} name="nombre" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control type="text" value={producto} name="producto" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Mes</Form.Label>
                        <Form.Control type="text" value={mes} name="mes" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="number" value={cantidad} name="cantidad" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>precio</Form.Label>
                        <Form.Control type="number" value={precio} name="precio" onChange={handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Editar
                </Button>
                </Form>
            </div>
        </div>
    )
}