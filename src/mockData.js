
import { random } from 'lodash';

const fetchData = (startIndex = 0) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(
        startIndex >= 1000
          ? []
          : Array.from({ length: 50 }).map((_, i) => {
              const index = startIndex + i;
              return {
                key: i,
                index: `${index}`,
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
              };
            }),
      );
    }, random(0, 1.0) * 1000);
  });

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

export { columns, fetchData };