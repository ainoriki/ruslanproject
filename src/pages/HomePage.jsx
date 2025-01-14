import '../App.css';
import Nav from '../components/Menu';
import { Space, Typography } from 'antd';

import { Row, Col } from 'antd';
const { Text, Link } = Typography;
const { Title } = Typography;
const { Paragraph} = Typography;

const HomePage = () => {
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
              <Text style={{color:'#fff', textAlign:'center', fontSize:'20px',fontWeight:'700' }}>MSQ</Text>  
            </div>
          </div>

          <div>

            <Title level={2} style={{textAlign:'center', marginTop:'50px', color:'#fff'}}>MSQ</Title>
            <Paragraph style={{textAlign:'center', color:'#fff', fontSize:'20px'}}>Открой для себя чудеса</Paragraph>
          </div>
        </div>

        </Col>
        </Row>
         
        </>
     );
}
 
export default HomePage;