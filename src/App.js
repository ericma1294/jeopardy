import logo from './logo.svg';
import './App.css';
import { Button, Col, Layout, Row } from 'antd';

import MainContent from './MainContent'

const { Header, Footer, Content } = Layout

function App() {
  return (
    <Layout className="App">
        {/* <Header>Insert Some Title Here</Header> */}

        <Content style={{padding: '5vh', background: '#e6e6fc', height: '100vh'}}>
          <MainContent />
        </Content>
        
        {/* <Footer>Insert some Footer Here</Footer> */}
    </Layout>
  );
}

export default App;
