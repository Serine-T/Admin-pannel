import { Avatar, Space, Switch } from 'antd';
import React from 'react';
import moment from 'moment';
import { DeleteFilled } from '@ant-design/icons';
import './styles.scss';
import { Link } from 'react-router-dom';

const UsersTableColumns = (deleteUser) => [
  {
    title: '',
    dataIndex: 'isChecked',
    render: () => <input type="checkbox"/>,
  },
  {
    title: 'Photo',
    dataIndex: 'photo',
    sorter: () => {return;},
    render: (url) => <Avatar src={url} />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: () => {return;},
    render: (name, record) => <Link to={`/user/edit/${record.id}`}>{name}</Link>,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    sorter: () => {return;}, },
  {
    title: 'Registered date',
    dataIndex: 'registeredDate',
    sorter: () => {return;},  
    render: (date) => <span>{moment(date).format('DD.MM.YYYY')}</span>
  },
  {
    title: 'Last active date',
    dataIndex: 'lastActiveDate',
    sorter: () => {return;},    render: (date) => <span>{moment(date).format('DD.MM.YYYY')}</span>
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: () => {return;}, },
  {    
    title: 'Actions',
    dataIndex: 'disabled',
    render: (disabled, record) =>   (
      <Space>
        <Switch size="small" defaultChecked={disabled}  />
        <DeleteFilled 
          role="button" 
          onClick = {() => deleteUser(record.id)}
          className="delete-btn"
        />
      </Space>
    )
  }
];

export default UsersTableColumns;
