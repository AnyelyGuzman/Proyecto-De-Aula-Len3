import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import api from '../../api'


export default function Edit(props) {
    const {id} = useParams()
    const [nombre, setnombre] = useState('')
    const [cantidad_total, setcantidadtotal] = useState('')
    const [precio_total, setpreciototal] = useState('')

    const getProductosBId = async () =>{
        const response = await api.getProductosBId(id)
        if(response && response.status === 200 && response.data && response.data.length > 0){
        setnombre(response.data[0].nombre)
        setcantidadtotal(response.data[0].cantidad_total)
        setpreciototal(response.data[0].precio_total)
        }
    }
    useEffect(() => {
        getProductosBId()
    }, [])

    const handleInputChange = event => {
        if(event.target.name === 'nombre') setnombre(event.target.value)
        if(event.target.name === 'cantidad_total') setcantidadtotal(event.target.value)
        if(event.target.name === 'precio_total') setpreciototal(event.target.value)
      }

    const envio = async event => {
        event.preventDefault()
        const data = {
            id_productos_bodega: id,
            nombre: nombre,
            cantidad_total: cantidad_total,
            precio_total: precio_total
          }
          const response = await api.editarProductosB(data)
          alert(response.data.response)
          props.history.push("/productosBodega")
    }

    return (
        <div className="cabe">
            <div className="title"><h1>Formulario Editar</h1></div>
            <br></br>
            <div className="formulario">
                <Form onSubmit={envio} className="form">
                <Form.Group controlId="formBasic">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={nombre} name="nombre" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formBasic">
                    <Form.Label>Cantidad Total</Form.Label>
                    <Form.Control type="number" value={cantidad_total} name="cantidad_total" onChange={handleInputChange}/>
                </Form.Group>
                <Form.Group controlId="formBasic">
                    <Form.Label>Precio Total</Form.Label>
                    <Form.Control type="number" value={precio_total}  name="precio_total" onChange={handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Editar
                </Button>
            </Form>
        </div>
    </div>

    )
}