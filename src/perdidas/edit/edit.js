import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import api from '../../api'
import './edit.css'


export default function Edit(props) {
    const {id} = useParams()
    const [producto, setproducto] = useState('')
    const [mes, setmes] = useState('')
    const [perdida_total, setperdidatotal] = useState('')
    const getPerdidasId = async () =>{
        const response = await api.getPerdidasId(id)
        if(response && response.status === 200 && response.data && response.data.length > 0){
        setproducto(response.data[0].producto)
        setmes(response.data[0].mes)
        setperdidatotal(response.data[0].perdida_total)
        }
    }
    useEffect(() => {
        getPerdidasId()
    }, [])

    const handleInputChange = event => {
        if(event.target.name === 'producto') setproducto(event.target.value)
        if(event.target.name === 'mes') setmes(event.target.value)
        if(event.target.name === 'perdida_total') setperdidatotal(event.target.value)
      }

    const envio = async event => {
        event.preventDefault()
        const data = {
            id_perdidas_admin: id,
            producto: producto,
            mes: mes,
            perdida_total: perdida_total
          }
          const response = await api.editarPerdida(data)
          alert(response.data.response)
          props.history.push("/perdidas")
    }

    return (
        <div className="cabe">
            <div className="title"><h1>Formulario Editar</h1></div>
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
                    <Form.Label>Perdida Total</Form.Label>
                    <Form.Control type="number" value={perdida_total} name="perdida_total" onChange={handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Editar
                </Button>
            </Form>
        </div>
        </div>

    )
}