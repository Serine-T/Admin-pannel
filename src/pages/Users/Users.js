import React, { useEffect } from 'react';
import UsersTableColumns from './UsersTableColumns';
import { Button, Modal, Space, Table } from 'antd';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { deleteUser, getAllUsers, gettingUsersInfo, removeUser, setLimit, setPage, sortUsers } from '../../store/slices/usersSlices';
import { useSelector } from 'react-redux';
import LayoutContainer from '../Layout/LayoutContainer';
import { Link } from 'react-router-dom';

const UsersContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettingUsersInfo());
    dispatch(getAllUsers());
  }, []);

  const { usersList, totalUsers, limit } = useSelector(state => state.users);

  const deleteUserInfo = (id) => {
    Modal.confirm({
      title: 'Permanently delete the user!',
      onOk: () =>  {
        dispatch(deleteUser(id));
        dispatch(removeUser(id));
      }
    });
  };

  const sortHandler = (sort) =>{
    const field = sort.field;
    const order = sort.order === 'ascend' ? 'asc' : 'desc';
    if(order) {
      dispatch(sortUsers({ field, order }));
    }
  };

  return (
    <>
      <LayoutContainer isStandard={false}>
        <Space className="user-page-top">
          <div className="user-page-title">All users</div>
          <div className="page-top-line"></div>
          <Button type="primary">
            <Link to='/user/create'>New user</Link>
          </Button>
        </Space>
        <Table 
          className="pb-5"
          rowKey="id"
          dataSource={usersList} 
          columns={UsersTableColumns(deleteUserInfo)} 
          scroll={{ x:'auto' }}
          showSorterTooltip={false}
          onChange= {(_,__, sort)=> sortHandler(sort)}
          pagination={{
            pageSize: limit,
            total: totalUsers,
            position: ['bottomLeft'],
            showTotal: (total) => (
              <span>Total number of users
                <span className='text-primary fw-bold'> {total}</span>
              </span>
            ),
            onChange: (page, limit) => {
              dispatch(setPage(page));
              dispatch(setLimit(limit));
              dispatch(gettingUsersInfo());
            }, }
          }
        />      
      </LayoutContainer>
    </>
  );
};

export default UsersContainer;
