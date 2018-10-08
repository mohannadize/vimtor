import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Poop(props) {
				return (<div>
								<h1>{props.title}</h1>
								<p>{props.content}</p>
								</div>)
}

class App extends React.Component {
    render() {
						return (<Poop title="mohannad hisham" content="I am the biggest poop ever."/>)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
