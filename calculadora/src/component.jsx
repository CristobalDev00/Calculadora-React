import React, { Component } from 'react';
import './App.css';
import { Button, FormGroup, FormControl, Form } from 'react-bootstrap';

function calcular(operacion, a, b) {
  var resultado = 0;
  switch (operacion) {
    case 'suma':
      resultado = a + b;
      break;
    case 'resta':
      resultado = a - b;
      break;
    case 'multiplicacion':
      resultado = a * b;
      break;
    case 'division':
      resultado = a / b;
      break;
    default:
      resultado = 0;
  }
  return resultado;
}

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operacion: 'suma',
      a: 0,
      b: 0,
      resultado: 0,
    };
  }

  handleOperacionChange = (e) => {
    this.setState({ operacion: e.target.value });
  };

  handleAChange = (e) => {
    this.setState({ a: parseInt(e.target.value) || 0 });
  };

  handleBChange = (e) => {
    this.setState({ b: parseInt(e.target.value) || 0 });
  };

  handleCalcular = (e) => {
    this.setState({ resultado: calcular(this.state.operacion, this.state.a, this.state.b) });
    e.preventDefault();
  };

  render() {
    return (
      <div className="Calculadora">
        <h1>Calculadora</h1>
        <div className="Calculadora-form">
          <Form  onSubmit={this.handleCalcular}>
            <FormGroup controlId="formInlineName">
              <FormControl as="select" placeholder="select" onChange={this.handleOperacionChange}>
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicación</option>
                <option value="division">División</option>
              </FormControl>
            </FormGroup>
            {' '}
            <FormGroup controlId="formInlineEmail">
              <FormControl type="number" placeholder="A" onChange={this.handleAChange} />
            </FormGroup>
            {' '}
            <FormGroup controlId="formInlinePassword">
              <FormControl type="number" placeholder="B" onChange={this.handleBChange} />
            </FormGroup>
            {' '}
            <Button type="submit">Calcular</Button>
          </Form>
        </div>
        <div className="Calculadora-resultado">
          <h2>Resultado</h2>
          <p>{this.state.resultado}</p>
        </div>
      </div>
    );
  }
}

export default Calculadora;
