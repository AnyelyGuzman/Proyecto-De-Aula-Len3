import React, {useState} from "react"
import './Login.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Login(props) {
    const [admin, setadmin] = useState("admin1")
    const [contrasena, setcontraseña] = useState("1007273356")

    const administrador = (e) => {
        if(e.target.name == "nombre") setadmin(e.target.value)
        if(e.target.name == "contrasena") setcontraseña(e.target.value)
    } 
    const admon = (e) => {
        e.preventDefault()
        if(admin == "admin1" && contrasena == "1007273356") props.history.push("/inicio")
    }
        return (
            <div className="cabecera">
            <div className="login_container">
                <h1>LOGIN ADMINSITRADOR</h1> 
                <Form className="login_form" onSubmit={admon}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Administrador</Form.Label>
                        <Form.Control type="text" onChange={administrador} name="nombre" placeholder="Administrador" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" onChange={administrador} name="contrasena" placeholder="Contraseña" />
                    </Form.Group>

                    <Button type="submit" variant="success">Ingresar</Button>
                </Form>
            </div>
            </div>
        )
}

