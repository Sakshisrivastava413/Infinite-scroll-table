import React, { Component } from 'react';
import { InfinityTable as Table } from 'antd-table-infinity';
import { columns, fetchData } from './mockData';

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
      <Table
        key="key"
        loading={this.state.loading}
        onFetch={this.handleFetch}
        pageSize={100}
        columns={columns}
        scroll={{ y: 450 }}
        dataSource={this.state.data}
        bordered
        debug
      />
    );
  }
}


export default App;
