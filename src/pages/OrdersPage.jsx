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
import { useCartStore } from '../store/Store';


const { Text, Link } = Typography;
const { Meta } = Card;


const OrdersPage = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const {addItemsToCart} = useCartStore();
    console.log("addtocart", addItemsToCart)



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

      const onAddToCart = (item) => {
        addItemsToCart(item)
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
                        <div className='items-card'>
                            <Card
                            hoverable
                            style={{ width: 240, background:'transparent', border:'none', background:'#fff'}}
                            cover={<img src={item.image} style={{width:'100px', height:'100px', background:'transparent', margin:'0 auto'}}/>}
                        >
                            <div className='card-inner'>
                                <Meta title={item.title} description={item.category} />
                                <Text>{item.price}<StrikethroughOutlined /></Text>
                                
                                <Button type="primary" onClick={() => onAddToCart(item)}>Add to cart</Button>
                            </div>
                        </Card>
                      </div>
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