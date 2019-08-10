import React, { Component } from 'react';
import { InfinityTable as Table } from 'antd-table-infinity';
import 'antd-table-infinity/index.css'

class App extends Component {
  state = {
    data: [],
    loading: false,
  };

 

  render() {
    return (
      <Table
        key="key"
        loading={this.state.loading}
        pageSize={100}
        scroll={{ y: 450 }}
        dataSource={this.state.data}
        bordered
        debug
      />
    );
  }
}


export default App;
