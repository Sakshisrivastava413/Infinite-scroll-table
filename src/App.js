import React, { Component } from 'react';
import { Spin } from 'antd';
import { columns, fetchData } from './mockData';
import { InfinityTable as Table } from 'antd-table-infinity';
import './App.css';
import 'antd-table-infinity/dist/index.css';

const LoadingIndicator = (
	<div className="loading-indicator-container">
		<Spin tip="Loading..." />
	</div>
);

class App extends Component {

	state = {
		data: [],
		loading: false,
	};

	handleFetch = () => {
		console.log('loading');
		this.setState({ loading: true });
		fetchData(this.state.data.length).then(newData =>
			this.setState(({ data }) => ({
				loading: false,
				data: data.concat(newData),
			})),
		);
	};

	render() {
		return (
			<div>
				<h3 className="title">Welcome.</h3>
				<Table
					key="key"
					loading={this.state.loading}
					onFetch={this.handleFetch}
					pageSize={100}
					columns={columns}
					loadingIndicator={LoadingIndicator}
					scroll={{ y: 450 }}
					dataSource={this.state.data}
					bordered
					debug
				/>
			</div>
		);
	}
}


export default App;
