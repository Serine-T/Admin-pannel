import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser, editUser } from './../../store/actions/usersActions';
import { useParams } from 'react-router-dom';
import { Form, Input, Space } from 'antd';
import LayoutContainer from '../Layout/LayoutContainer';

const EditUserComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    dispatch(getSingleUser(id));
  }, []);

  const { currentUserData } = useSelector(state => state.users);

  const [body, setBody] = useState(currentUserData);

  useEffect(() => {
    setBody(currentUserData);
  }, [currentUserData]);

  const changeHandler = (name, value)=>{
    if(value){
      setBody({ ...body, [name]: value.trim() });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editUser({ id, body }));
    navigate('/users');
  };
  
  return (
    <>
      <LayoutContainer isStandard={false}>
        <Space className="user-page-top">
          <div className="user-page-title">Edit user</div>
          <div className="page-top-line"></div>
        </Space>  
        <div className="col-7 border p-5">
          <form className="col-6" onSubmit={(e)=>submitHandler(e)}>
            <Form.Item
              onChange={((e) => changeHandler('name', e.target.value))}
            >
              <Input 
                value={body.name}
                type="text"
                placeholder="User name"
              />
            </Form.Item>
            <Form.Item
              onChange={((e) => changeHandler('email', e.target.value))}
            >
              <Input
                value={body.email}
                type="email"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              onChange={((e) => changeHandler('location', e.target.value))}
            >
              <Input
                value={body.location}
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

export default EditUserComponent;
