import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import api from '../../api'
import './add.css'


export default function Edit(props) {
    const { id } = useParams()
    const [producto, setproducto] = useState('')
    const [mes, setmes] = useState('')
    const [ganancia_total, setgananciatotal] = useState('')

    const handleInputChange = event => {
        if (event.target.name === 'producto') setproducto(event.target.value)
        if (event.target.name === 'mes') setmes(event.target.value)
        if (event.target.name === 'ganancia_total') setgananciatotal(event.target.value)
    }

    const envio = async event => {
        event.preventDefault()
        const data = {
            producto: producto,
            mes: mes,
            ganancia_total: ganancia_total,
        }
        const response = await api.crearGanancia(data)
        console.log(response.data)
        props.history.push("/ganancias")
    }

    return (
        <div className="conta">
            <div className="title"><h1>Formulario Agregar</h1></div>
            <br></br>
            <div className="formulario">
                <Form onSubmit={envio} className="form">
                    <Form.Group controlId="formBasic">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control type="text" value={producto} name="producto" onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasic">
                    <Form.Label>Mes</Form.Label>
                        <Form.Control as="select" value={ mes } name="mes" onChange={handleInputChange}>
                            <option value="enero">Enero</option>
                            <option value="febrero">Febrero</option>
                            <option value="marzo">Marzo</option>
                            <option value="abril">Abril</option>
                            <option value="mayo">Mayo</option>
                            <option value="junio">Junio</option>
                            <option value="julio">Julio</option>
                            <option value="agosto">Agosto</option>
                            <option value="septiembre">Septiembre</option>
                            <option value="octubre">Octubre</option>
                            <option value="noviembre">Noviembre</option>
                            <option value="diciembre">Diciembre</option>
                        </Form.Control>
                </Form.Group>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Ganancia Total</Form.Label>
                        <Form.Control type="number" value={ganancia_total} name="ganancia_total" onChange={handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Agregar
                </Button>
                </Form>
            </div>
        </div>

    )
}