import React from 'react';
import { Layout } from 'antd';
import Routes from './routes';

import 'antd/dist/antd.css';
import './styles/generalStyle.css';

const { Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Content style={{ marginTop: 100 }}>
          <Routes />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
