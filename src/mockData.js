
import { random } from 'lodash';

const columns = [
  {
    title: 'index',
    dataIndex: 'index',
    render: text => text,
    width: 50,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: 'Age',
    width: 50,
    dataIndex: 'age',
  },
  {
    title: 'Address',
    width: 200,
    dataIndex: 'address',
  },
];

export { columns };