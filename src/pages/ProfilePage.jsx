import '../App.css';
import Nav from '../components/Menu';
import { Space, Typography } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Row, Col } from 'antd';
import useAuthStore from '../store/Store';
import { FormEvent, FormEventHandler, useState } from "react";
import { useNavigate } from 'react-router-dom';
const { Text, Link } = Typography;
const { Title } = Typography;
const { Paragraph} = Typography;

const ProfilePage = () => {

      const login = useAuthStore(state => state.login)
      const navigate = useNavigate()

      const handleFinish = (formValues) => {
        const { username, password } = formValues;
        

        const validUsername = 'ainoriki';
        const validPassword = '12345678';
    
        if (username === validUsername && password === validPassword) {
            const token = 'ruslanruslan'; 
            login(token);
            console.log('Успешный вход');
            navigate('/'); 
        } else {
            console.error('Неверные данные');
        }
    };


    return ( 
        <>
            <Row justify='center' style={{minHeight:'100vh'}} className='main'>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          className='main-container'>

        <div className="home-page">
            <div className='home-page__inner'>
                <Nav />
                <div className='text'>
                    <Text style={{color:'#fff', textAlign:'center', fontSize:'20px',fontWeight:'700' }}>MSQ</Text>  <br></br>
                    <Text style={{color:'#fff', textAlign:'center', fontSize:'20px',fontWeight:'700' }}>Login</Text> 
                </div>
            </div>

          

            <div className='home-page__form'>
                <Form
                        onFinish={handleFinish}
                        name="basic"
                        labelCol={{
                        span: 8,
                        }}
                        wrapperCol={{
                        span: 16,
                        }}
                        style={{
                        maxWidth: 600,
                        }}
                        initialValues={{
                        remember: true,
                        }}
                
                        autoComplete="off"
                    >
                        <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your username!',
                            },
                        ]}
                        >
                        <Input style={{width:'160px'}}/>
                        </Form.Item>

                        <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                        >
                        <Input.Password style={{width:'160px'}}/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        </Form.Item>
                </Form>
            </div>
          </div>
        </Col>
        </Row>
        </>
     );
}
 
export default ProfilePage;