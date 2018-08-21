import React, { Component } from 'react';
import logo from './Kuwa.png';
import './App.css';
import Navigation from './Navigation.js';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import loading from './loading.gif';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			registrations:[],
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({isLoading: !this.state.isLoading});
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			fetch('/registration')
				.then(response => response.json())
				.then(table => this.setState({registrations: table}))
				.then(console.log('DB =', this.state.registrations))
				.then(this.setState({isLoading : false}))
                .then(console.log("isLoading = " + this.state.isLoading))
		}, 3000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		if(this.state.isLoading === false) {
			return (
				<div className="App">
				<Navigation />
					<header className="App-header">
						<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
						<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
						<img src={logo} className="App-logo" alt="logo"/>
						<h1 className="App-title">Kuwa Registrar Database (Moe)</h1>
					</header>
					<BootstrapTable ref='table' data={this.state.registrations}>
						<TableHeaderColumn width='5%'  dataSort={true} dataAlign='center' dataField='registration_id' isKey >
						ID
						</TableHeaderColumn>
						
						<TableHeaderColumn width='30%' dataSort={true} dataAlign='center' dataField='client_address'>
						Client Address
						</TableHeaderColumn>
						
						<TableHeaderColumn width='30%' dataSort={true} dataAlign='center' dataField='contract_address'>
						Contract Address
						</TableHeaderColumn>

						<TableHeaderColumn width='18%' dataSort={true} dataAlign='center' dataField='timestamp' >
						Timestamp(EDT)
						</TableHeaderColumn>

						<TableHeaderColumn width='17%' dataSort={true} dataAlign='center' dataField='status' >
						Status
						</TableHeaderColumn>
					</BootstrapTable>
				</div>
			);
        }
		else {
			return (
				<div className="App">
				<Navigation />
					<header className="App-header">
						<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
						<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
						<img src={logo} className="App-logo" alt="logo"/>
						<h1 className="App-title">Kuwa Registrar Database (Moe)</h1>
					</header>
					<div className="loading">
						<img className="isLoading" src={loading} alt="Loading Data..." />
					</div>
				</div>
			);
		}
	}
}

export default App;
