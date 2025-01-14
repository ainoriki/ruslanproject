import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { Row, Col } from 'antd';
import {Typography } from 'antd';
import Nav from '../components/Menu';
import { Button, Flex } from 'antd';    
import { StrikethroughOutlined } from '@ant-design/icons'; 
import { useNavigate } from 'react-router-dom';
import Order from '../components/Order';


const { Text, Link } = Typography;
const { Meta } = Card;


const OrdersPage = () => {

    const navigate = useNavigate()
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);



    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(result.slice(0, 1));
            },
        )
    }, [])

    if (!items) {
        return <p>Загрузка...</p>; // Пока данные не загружены
      }

  
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
                    
                    <Text style={{color:'#fff', textAlign:'center', fontSize:'20px',fontWeight:'700' }}>MSQ</Text><br></br> 
                    <Text style={{color:'#fff', textAlign:'center', fontSize:'20px',fontWeight:'700' }}>Orders</Text>  
                </div>
              </div>


                <div className='home-page__items'>
                {items.map((item) => {
                    return(
                            <Order
                                title={item.title}
                                category={item.category}
                                image={item.image}
                            />
                    )}
                )}
                </div>
            </div>
        </Col>
        </Row>

        </>
     );
}
 
export default OrdersPage;