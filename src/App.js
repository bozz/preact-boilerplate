import { h, Component } from 'preact';
import Router from 'preact-router';

import Header from './views/Header';
import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';

import "./styles/main.scss";

export default class App extends Component {
	render() {
		return (
			<div>
        <Header />
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Error type="404" default />
        </Router>
			</div>
		);
	}
}
