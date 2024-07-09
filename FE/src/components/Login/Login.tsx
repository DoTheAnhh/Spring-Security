import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import './css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface LoginResponse {
  token: string;
  refreshToken: string;
}

const Login: React.FC = () => {
  
  const navigate = useNavigate();

  const onLogin = async (values: any) => {
    try {
      const response = await axios.post<LoginResponse>('http://localhost:8080/auth/signin', {
        email: values.email,
        password: values.password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        message.success('Login successful!');
        navigate('/home');
      } else {
        message.error('Login failed!');
      }
    } catch (error) {
      message.error('An error occurred during login!');
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onLogin}
    >
      <div className="logo-container">
        <img src='https://github.githubassets.com/favicons/favicon.png' alt="Logo" className="logo-image" />
      </div>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <div style={{ marginTop: 10 }}>
          Or <a href="">register now!</a>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Login;
