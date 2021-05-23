import React from "react"
import './Inicio.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import {Link} from 'react-router-dom'




export default function Inicio() {
    return (
        <>
            <h1 className="titulo">Administrador</h1>
            <div className="grid">
                <Card className="card_t">
                <Card.Title className="ti" >Proveedores</Card.Title>
                    <Card.Img variant="top" src="img/2.jpg" className="img" />
                    <Card.Body>
                        <Link to ="/proveedores"><Button  variant="outline-success">Proveedor</Button>{' '}</Link>
                    </Card.Body>
                </Card>
                <Card className="card_t">
                <Card.Title className="ti">Clientes</Card.Title>
                    <Card.Img variant="top" src="img/7.png" className="img" />
                    <Card.Body>
                       <Link to="/clientes"> <Button variant="outline-success" className="btn">Clientes</Button>{' '}</Link>
                    </Card.Body>
                </Card>
                <Card className="card_t">
                <Card.Title className="ti">Productos Bodega</Card.Title>
                    <Card.Img variant="top" src="img/3.png" className="img"/>
                    <Card.Body>
                    <Link to="/productosBodega"><Button variant="outline-success" className="btn">Productos Bodega</Button>{' '}</Link>
                    </Card.Body>
                </Card >
                <Card className="card_t">
                <Card.Title className="ti">Ventas</Card.Title>
                    <Card.Img variant="top" src="img/9.png" className="img" />
                    <Card.Body>
                    <Link to="/ventas"> <Button variant="outline-success" className="btn_v">Ventas</Button>{' '}</Link>
                    </Card.Body>
                </Card >
                <Card className="card_t">
                    <Card.Title className="ti">Ganancias</Card.Title>
                    <Card.Img variant="top" src="img/4.jpg" className="imag"/>
                    <Card.Body>
                    <Link to="/ganancias"> <Button variant="outline-success" className="btn">Ganancias</Button>{' '}</Link>
                    </Card.Body>
                </Card >
                <Card className="card_t">
                    <Card.Title className="ti">Perdidas</Card.Title>
                    <Card.Img variant="top" src="img/5.png" className="img"/>
                    <Card.Body>
                    <Link to="/perdidas"> <Button variant="outline-success" className="btn">Perdidas</Button>{' '}</Link>
                    </Card.Body>
                </Card >
                <Card className="card_t">
                    <Card.Title className="ti">Productos Pendientes Entregar</Card.Title>
                    <Card.Img variant="top" src="img/13.png" className="image"/>
                    <Card.Body>
                    <Link to="/proPtesEntregar"> <Button variant="outline-success" className="btn">Productos Pendientes Entregar</Button>{' '}</Link>
                    </Card.Body>
                </Card >
                <Card className="card_t">
                    <Card.Title className="ti">Productos Pendientes Llegar</Card.Title>
                    <Card.Img variant="top" src="img/14.png" className="img"/>
                    <Card.Body>
                    <Link to="/proPtesLlegar"> <Button variant="outline-success" className="btn">Productos Pendientes Llegar</Button>{' '}</Link>
                    </Card.Body>
                </Card >
                <Card className="card_t">
                    <Card.Title className="ti">Personal Transportador</Card.Title>
                    <Card.Img variant="top" src="img/6.jpg" className="img"/>
                    <Card.Body>
                    <Link to="/personalTransporte"> <Button variant="outline-success" className="btn">Personal Transportador</Button>{' '}</Link>
                    </Card.Body>
                </Card >
                <Card className="card_t">
                    <Card.Title className="ti">Vehiculos</Card.Title>
                    <Card.Img variant="top" src="img/8.png" className="imag"/>
                    <Card.Body>
                    <Link to="/vehiculo"> <Button variant="outline-success" className="btn">Vehiculos</Button>{' '}</Link>
                    </Card.Body>
                </Card >
            </div>
        </>
    )
}