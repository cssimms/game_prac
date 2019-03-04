import { connect } from 'react-redux';
import App from '../App.js';

const mapStateToProps = state => ({
  message: state.message,
});

const Game = connect(
  mapStateToProps,
)(App);

export default Game;
