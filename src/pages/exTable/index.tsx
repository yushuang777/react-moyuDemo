import { Table } from 'antd';
import React, { useState } from 'react';
import type { ColumnsType } from 'antd/es/table';

// 数据类型定义
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
}

// 定义表格列
const columns: ColumnsType<DataType> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  Table.EXPAND_COLUMN, // 展开列
  { title: 'Age', dataIndex: 'age', key: 'age' },
  Table.SELECTION_COLUMN, // 选择列
  { title: 'Address', dataIndex: 'address', key: 'address' },
];

// 模拟数据
const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This is not expandable.',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description:
      'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

// 自定义展开内容
const expandedContent = (record: DataType) => {
  return (
    <div>
      <h4>Additional Information</h4>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Description</strong>
            </td>
            <td>{record.description}</td>
          </tr>
          <tr>
            <td>
              <strong>Age</strong>
            </td>
            <td>{record.age}</td>
          </tr>
          <tr>
            <td>
              <strong>Address</strong>
            </td>
            <td>{record.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// 自定义展开按钮
const ExpandButton: React.FC<{ expanded: boolean; onClick: () => void }> = ({
  expanded,
  onClick,
}) => {
  return <span onClick={onClick}>{expanded ? '收起' : '展开'}</span>;
};

// App 组件
const App: React.FC = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);

  // 展开/收起行的回调
  const onExpand = (expanded: boolean, record: DataType) => {
    console.log(expanded);
    let newExpandedRowKeys = [...expandedRowKeys];
    if (expanded) {
      // 展开，添加当前行的 key
      newExpandedRowKeys.push(record.key);
    } else {
      // 收起，移除当前行的 key
      newExpandedRowKeys = newExpandedRowKeys.filter(
        (key) => key !== record.key
      );
    }
    console.log(newExpandedRowKeys);
    setExpandedRowKeys(newExpandedRowKeys);
  };

  return (
    <Table
      columns={columns}
      expandable={{
        columnTitle: '操作',
        expandIcon: ({ expanded, onExpand, record }) => (
          <ExpandButton
            expanded={expanded}
            onClick={() => onExpand(expanded, record)}
          />
        ),
        expandedRowRender: (record) => expandedContent(record),
        rowExpandable: (record) => record.name !== 'Not Expandable',
        expandedRowKeys,
        onExpand,
      }}
      dataSource={data}
    />
  );
};

export default App;
