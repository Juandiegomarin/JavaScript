import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tablero:[],
    };
  }

  render() {
    return (
      <div className="App">
        <Button>Boton</Button>
      </div>
    );
  }

}

export default App;
