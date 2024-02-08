import 'bootstrap/dist/css/bootstrap.css';
import {Component} from "react";
import {Button} from "reactstrap";

const GODOS = [
    {
        id: 0,
        imagen: "assets/images/Leovigildo.jpeg",
        nombre: "Leovigildo"
    },
    {
        id: 1,
        imagen: "assets/images/Atanagildo.jpeg",
        nombre: "Atanagildo"
    },
    {
        id: 2,
        imagen: "assets/images/Suintila.jpeg",
        nombre: "Suintila"
    },
    {
        id: 3,
        imagen: "assets/images/Recaredo.jpeg",
        nombre: "Recaredo"
    },
    {
        id: 4,
        imagen: "assets/images/Witiza.jpeg",
        nombre: "Witiza"
    },
    {
        id: 5,
        imagen: "assets/images/Amalarico.jpeg",
        nombre: "Amalarico"
    },
    {
        id: 6,
        imagen: "assets/images/Recesvinto.jpeg",
        nombre: "Recesvinto"
    },
    {
        id: 7,
        imagen: "assets/images/Sisebuto.jpeg",
        nombre: "Sisebuto"
    },
    {
        id: 8,
        imagen: "assets/images/Ervigio.jpeg",
        nombre: "Ervigio"
    }
];

function ReyesGodos(props) {
    const godos = props.godos
    let actual = props.actual

    if (godos.length === 0) return <h1>NO HAY REYES</h1>

    return (
        <div className='d-flex'>
            <Button onClick={props.handleAnterior}>Anterior</Button>
            <h1>{godos[actual].nombre}</h1>
            <Button onClick={props.handleSiguiente}>Siguiente</Button>
        </div>
    )
}

function CambioBando(props) {
    const godos = props.godos
    const normandos = props.normandos

    return (
        <div>
            <h1>GODOS</h1>
            {
                godos.map(value => <Button onClick={() => props.onClick(value)} key={value.id}>{value.nombre}</Button>)
            }
            <h1>NORMANDOS</h1>
            {
                normandos.map(value => <Button onClick={() => props.onClick(value)}
                                               key={value.id}>{value.nombre}</Button>)
            }
        </div>
    )
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            godos: GODOS,
            normandos: [],
            actual: 0,
        }
    }

    handleAnterior() {
        if (this.state.actual > 0) {
            this.setState({actual: this.state.actual - 1})
        }
    }

handleSiguiente() {
        if (this.state.actual < this.state.godos.length - 1) {
            this.setState({actual: this.state.actual + 1})
        }
    }

    cambiarBando(object) {
        if (this.state.godos.includes(object)) {
            const pos = this.state.godos.indexOf(object)
            if (this.state.actual > pos) {
                this.setState({actual: this.state.actual - 1})
            } else if (this.state.actual === pos) {
                this.setState({actual: 0})
            } else {
                this.setState({actual: this.state.actual})
            }

            this.setState({
                godos: this.state.godos.filter(value => value !== object),
                normandos: [...this.state.normandos, object]
            })
        } else {
            this.setState({
                normandos: this.state.normandos.filter(value => value !== object),
                godos: [...this.state.godos, object]
            })
        }
    }

    render() {
        return (
            <>
                <ReyesGodos godos={this.state.godos} actual={this.state.actual}
                            handleAnterior={() => this.handleAnterior()}
                            handleSiguiente={() => this.handleSiguiente()}/>
                <CambioBando onClick={(obj) => this.cambiarBando(obj)} godos={this.state.godos}
                             normandos={this.state.normandos}/>
            </>
        );
    }
}

export default App