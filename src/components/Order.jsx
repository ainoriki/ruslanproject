import '../App.css';
import { Card } from 'antd';
import {Typography } from 'antd';
import { Button } from 'antd';    
import { StrikethroughOutlined } from '@ant-design/icons'; 
import { useCartStore } from '../store/Store';

const { Text, Link } = Typography;
const { Meta } = Card;

const Order = ({title, price, image, item, category}) => {

    const {addItemsToCart} = useCartStore();
    const onAddToCart = () => {
        const item = {title, price, image, category}
        addItemsToCart(item)
        console.log('addItemsToCart', item)
        // navigate('/msq/cart')
    }

    return ( 
        <div className='items-card'>
                 <Card
                hoverable
                style={{ width: 240, background:'transparent', border:'none', background:'#fff'}}
                cover={<img src={image} style={{width:'100px', height:'100px', background:'transparent', margin:'0 auto'}}/>}
            >
                <div className='card-inner'>
                    <Meta title={title} description={category} />
                    <Text>{price}<StrikethroughOutlined /></Text>
                    <Button type="primary" onClick={onAddToCart}>Add to cart</Button>
                </div>
            </Card>
          </div>
     );
}
 
export default Order;