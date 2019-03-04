import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Canvas from './components/Canvas';
import { getCanvasPosition } from './utils/formulas';

class App extends Component {
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosition)
    }, 10);
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.props.message }</h1>
        <Canvas
          angle={ this.props.angle }
          trackMouse={ event => (this.trackMouse(event)) }
        />
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
}

export default App;
