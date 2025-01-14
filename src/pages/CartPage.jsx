import { Row, Col } from 'antd';
import '../App.css';
import { Button, Flex } from 'antd';
import {Typography } from 'antd';
import Nav from '../components/Menu';
import OrdersPage from './OrdersPage';
import { useCartStore } from '../store/Store';
import { useEffect } from 'react';
import Order from '../components/Order';


const { Text, Link } = Typography;

const CartPage = () => {

    const {cartItems} = useCartStore()
    console.log("cartItems", cartItems)

    useEffect(() => {
        console.log("Cart items:", cartItems); // Вывод текущего состояния корзины
    }, [cartItems]);

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
                    <Text style={{color:'#fff', textAlign:'center', fontSize:'20px',fontWeight:'700' }}>Cart</Text>  
                </div>
              </div>

              {cartItems.length == 0 && (
                <Text style={{color:'#fff', textAlign:'center', fontSize:'20px',fontWeight:'700', display:'flex', justifyContent:'center', marginTop:'30px' }}>Cart is empty</Text>  
              )}

            {cartItems.length > 0 && (
                <div className='home-page__items'>
                    {cartItems.map((item) => {
                      return(

                        <Order 
                          id={item.id}
                          title={item.title}
                          category={item.category}
                         />
                      )
                        
                    })}
                     <div>
                        <Button type="primary">Оформить заказ</Button>
                      </div>
                </div>
                
            )}

           


              </div>
            </Col>
            </Row>

        </>
     );
}
 
export default CartPage;