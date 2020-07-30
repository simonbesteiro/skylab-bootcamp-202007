import React from 'react';

// this function is now a class
/* function Hello({ now }) {
	return <h1>Hello at {now}</h1>;
} */

class Hello extends React.Component {
	interval = null;
	constructor(props) {
		super(props);
		this.state = {
			now: new Date().toISOString()
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				now: new Date().toISOString()
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return <h1>Hello at {this.state.now}</h1>;
	}
}

export default Hello;
