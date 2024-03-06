import React, { useState, useEffect, createContext } from 'react';
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Button, Label, Input } from 'reactstrap';

function AppLogin(props) {
    // creo tres hooks con los datos que quiero guardar
    const [clave,setClave]=useState("");
    const [telefono,setTelefono]=useState("");
    const [informacion,setinformacion]=useState("");

    // cada vez que cambie algo en el input le pondra el dato cambiado al hook que le pertenece
    const handleChange = (event)=>{
        setinformacion("");
        // si se ha modificado el tlf
        if(event.target.name == "usuario") setTelefono(event.target.value)
        // si se ha modificado la contraseña
        if(event.target.name == "clave") setClave(event.target.value)

        //console.log(clave + ", " + telefono)
    }

    // comprobar que al hacer click mire si los campos estan vacios
    // se pueden mirar directamente desde el hook ya que los datos se han guardado ahi
    const clicar=()=>{
        if(clave =="" || telefono == ""){
            setinformacion("Rellene los campos")

        // comprobar que son los datos de login
        // en el caso en el que no esten vacios
        }else{
            // le paso a la funcion los datos de los hooks
            props.userLogin(telefono,clave)
        }

        // si el usuario no es te manda 
        if(!props.usuMalo && clave !="" && telefono != ""){
            setinformacion("Este usuario no existe")
        }
    }

    return (
        <Row>
            <Col sm="4"></Col>
            <Col sm="4">
                <Card body>
                    <CardTitle className="text-center" tag="h4">
                        Log in
                    </CardTitle>
                    {/* Formulario para pasar el telefono y la clave */}
                    <Form inline>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label className="me-sm-2" for="usuario">Usuario</Label>
                            <Input
                                id="usuario"
                                name="usuario"
                                placeholder="Escribe tu usuario"
                                type="text"
                                // cada vez que cambie ejecuta el handler
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <br/>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label className="me-sm-2" for="clave">Contraseña</Label>
                            <Input
                                id="clave"
                                name="clave"
                                type="password"
                                // cada vez que cambie ejecuta el handler
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <br />

                        <Button color="primary" size="lg" block onClick={()=>clicar()}>
                            <strong>Log in</strong>
                        </Button>
                        <CardText className="text-danger">{informacion}</CardText>

                    </Form>

                </Card>
            </Col>
        </Row>
    )
}

export default AppLogin;