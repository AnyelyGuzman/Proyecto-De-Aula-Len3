import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from "react"
import {useParams} from "react-router-dom"
import api from '../../api'
import './add.css'

export default function Edit(props) {
    const {id} = useParams()
    const [nombre, setnombre] = useState('')
    const [cantidad, setcantidad] = useState('')
    const [precio, setprecio] = useState('')

    const handleInputChange = event => {
        if(event.target.name === 'nombre_pro') setnombre(event.target.value)
        if(event.target.name === 'cantidad') setcantidad(event.target.value)
        if(event.target.name === 'precio') setprecio(event.target.value)
      }

    const envio = async event => {
        event.preventDefault()
        const data = {
            nombre_pro: nombre,
            cantidad: cantidad,
            precio: precio
          }
          const response = await api.crearProPteLlet(data)
          alert(response.data.response)
          props.history.push("/proPtesLlegar")
    }

    return (
        <div className="conta">
            <div className="title"><h1>Formulario Agregar</h1></div>
            <br></br>
            <div className="formulario">
                <Form onSubmit={envio} className="form">
                <Form.Group controlId="formBasic">
                    <Form.Label>Nombre Producto</Form.Label>
                    <Form.Control type="text" value={nombre} name="nombre_pro" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formBasic">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="number" value={cantidad} name="cantidad" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formBasic">
                    <Form.Label>precio</Form.Label>
                    <Form.Control type="number" value={precio}  name="precio" onChange={handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
    </div>

    )
}