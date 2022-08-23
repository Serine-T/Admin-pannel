import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Space } from 'antd';
import LayoutContainer from '../Layout/LayoutContainer';
import { useDispatch } from 'react-redux';
import { createUser } from './../../store/slices/usersSlices';

const CreateUserComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [body, setBody] = useState ({});

  const changeHandler = (name, value)=>{
    if(value){
      setBody({ ...body, [name]: value.trim() });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    body.registeredDate = new Date();
    body.lastActiveDate= new Date();
    dispatch(createUser(body));
    navigate('/users');
  };
  
  return (
    <>
      <LayoutContainer isStandard={false}>
        <Space className="user-page-top">
          <div className="user-page-title">New user</div>
          <div className="page-top-line"></div>
        </Space>  

        <div className="col-7 border p-5">
          <form className="col-6" onSubmit={(e)=>submitHandler(e)}>
            <Form.Item
              onChange={((e) => changeHandler('name', e.target.value))}
            >
              <Input placeholder="User name" />
            </Form.Item>
            <Form.Item
              onChange={((e) => changeHandler('email', e.target.value))}
            >
              <Input
                type="email"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              onChange={((e) => changeHandler('location', e.target.value))}
            >
              <Input
                type="location"
                placeholder="Location"
              />
            </Form.Item>
            <Form.Item>
              <button
                type="submit" 
                className="btn btn-primary"
              >
                Save
              </button>
            </Form.Item>
          </form>
        </div>
      </LayoutContainer>
    </>
  );
};

export default CreateUserComponent;
