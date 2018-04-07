import React from 'react';
import ReactDOM from 'react-dom';
import PreventingTransitionsExample from './comon.js';


class Page extends React.Component {

	render() {
		return (
			<div>
				{PreventingTransitionsExample()}
			</div>
		)
	}
	shouldComponentUpdate(nextProps, nextState) {
  	return false;	
  }
}

ReactDOM.render(<Page />,
	document.getElementById('app'));