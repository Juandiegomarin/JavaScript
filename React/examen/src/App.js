import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label } from 'reactstrap';
import { FARMACOS } from './componentes/datos';

const VentanaModalDiccionario = (props) => {
    const {
        className
    } = props;

    const [listaFarmacos, setListaFarmacos] = useState(FARMACOS);
    const [fElegido, setFElegido] = useState("");
    const [listaFiltrada, setListaFiltrada] = useState(FARMACOS);
   

    const handleChange = (event) => {
        let buscar=event.target.value;
        if(buscar!==""){
        let listaFiltro= listaFarmacos.filter((f)=>f.descATC.toLowerCase().includes(buscar.toLowerCase()))
       
        setListaFiltrada(listaFiltro);
        }
    }
    const handleClick = (event) => {

        let farmaco = event.target.value;

        setFElegido(farmaco);

    }
    return (
        <div>
            <Modal isOpen={props.mostrar} toggle={props.toggle}
                className={className} onEntering={"//ESTO SE EJECUTA CUANDO MUESTRAS LAVENTANA"}>
                <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
                <ModalBody>
                    <FormGroup row>



                        <Label sm={2} > Filtrar: </Label>
                        <Col sm={10}>
                            <Input onChange={handleChange}
                                id="filtro"
                                name="filtro"
                                type="Text" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={12}>
                            <Input onChange={handleChange} onClick={handleClick}
                                id="selectMulti"
                                name="selectMulti"
                                type="select"
                            >
                                {listaFiltrada.map((e) => <option>{e.codATC + "  " + e.descATC}</option>)}
                            </Input>
                        </Col>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    {fElegido}<Button color="primary"

                        onClick={() => props.add(fElegido)}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ModalFooter>
            </Modal>
        </div>
    );
}

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            rxseleccionar: "",
            rxenmascarar: "",
            diccionario: "FÁRMACO",
            elegido: "",

            //EXAMEN REACTJS. GESTIÓN DE FÁRMACOS

        }
    }

    handleChange = (event) => {

    }
    add(datos) {
        
        let arr;
        if (this.state.elegido === "azul") {
            arr = this.state.rxseleccionar;
            arr += datos;
            this.setState({ rxseleccionar: arr });
        } else {
            arr = this.state.rxenmascarar;
            arr += datos;
            this.setState({ rxenmascarar: arr });
        }


        this.toggleModal();
    }

    setIsOpen(d) {
        if (d === undefined) return;
        this.setState({ isOpen: d })
    }
    toggleModal(tipo) {

        console.log(tipo)
        this.setState({ elegido: tipo });
        this.setIsOpen(!this.state.isOpen);

    }
    render() {
        return (
            <>
                <div>
                    <UncontrolledAccordion
                        defaultOpen={[
                            '1'
                        ]}
                        stayOpen
                    >
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                GESTION DE FARMACOS
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                <Row>
                                    <Col>
                                        <Alert color="info">
                                            Incluir X Medicamentos:
                                            <Input type="textarea"

                                                name="rxseleccionar" onChange={this.handleChange.bind(this)}
                                                value={this.state.rxseleccionar} />

                                            EXAMEN REACTJS. GESTIÓN DE FÁRMACOS

                                            <Button

                                                onClick={() => { this.toggleModal("azul") }} color="info">Add</Button>
                                            {" "}<Button color="info"

                                                onClick={""}>Clear</Button>
                                        </Alert>
                                    </Col>
                                    <Col>
                                        <Alert color="danger">
                                            Excluir X Medicamentos:
                                            <Input type="textarea" name="rxenmascarar"

                                                onChange={this.handleChange.bind(this)}
                                                value={this.state.rxenmascarar} />
                                            <Button

                                                onClick={() => { this.toggleModal("rojo") }} color="danger">Add</Button>
                                            {" "}<Button color="danger"

                                                onClick={""}>Clear</Button>
                                        </Alert>
                                    </Col>
                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>
                </div>
                <VentanaModalDiccionario diccionario={this.state.diccionario}
                    add={(datos) => this.add(datos)} mostrar={this.state.isOpen} aceptar=
                    {"Añadir"} toggle={() => this.toggleModal()} titulo={"Add" + this.state.diccionario}/>

                <br />
            </>
        );
    }
}
class App extends Component {
    render() {
        return (
            <div className="App">
                <Filter />
            </div>
        );
    }

    //EXAMEN REACTJS. GESTIÓN DE FÁRMACOS

}
export default App;