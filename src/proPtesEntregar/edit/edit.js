import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import api from '../../api'


export default function Edit(props) {
    const {id} = useParams()
    const [nombre, setnombre] = useState('')
    const [cantidad, setcantidad] = useState('')
    const [precio, setprecio] = useState('')

    const getProPteEntId = async () =>{
        const response = await api.getProPteEntId(id)
        console.log(response)
        setnombre(response.data[0].nombre_pro)
        setcantidad(response.data[0].cantidad)
        setprecio(response.data[0].precio)
    }
    useEffect(() => {
        getProPteEntId()
    })

    const handleInputChange = event => {
        if(event.target.name === 'nombre_pro') setnombre(event.target.value)
        if(event.target.name === 'cantidad') setcantidad(event.target.value)
        if(event.target.name === 'precio') setprecio(event.target.value)
      }

    const envio = async event => {
        event.preventDefault()
        const data = {
            id_pro_ptes_entregar_admin: id,
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
          }
          const response = await api.editarProPteEnt(data)
          alert(response.data.response)
          props.history.push("/proPtesEntregar")
    }

    return (
        <div className="cabe">
            <div className="title"><h1>Formulario Editar</h1></div>
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
                    Editar
                </Button>
            </Form>
        </div>
    </div>
    )
}