import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

	render(){
		return (
		<div>
			This is React Component
		</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));