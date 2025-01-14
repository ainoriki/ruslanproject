import { Row, Col } from 'antd';
import {Typography } from 'antd';
import Nav from '../components/Menu';
import OrdersPage from './OrdersPage';
import { useCartStore } from '../store/Store';
import { useEffect } from 'react';

const { Text, Link } = Typography;

const CartPage = () => {

    const {cartItems} = useCartStore()

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

            {cartItems.length >= 1 && (
                <div>
                    {cartItems.map((item) => {
                        return(
                            <p>{item.title}</p>
                        )
                    })}
                </div>
            )}


              </div>
            </Col>
            </Row>

        </>
     );
}
 
export default CartPage;