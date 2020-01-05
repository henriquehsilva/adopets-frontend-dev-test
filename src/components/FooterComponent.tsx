import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent: React.FC = () => {

  return (
    <Footer style={{ textAlign: "center" }}>
      <b>Adopets</b> front-end dev test © 2019 Created by
      <a href="https://github.com/henriquehsilva"> henriquehsilva</a>
    </Footer>
  )
}

export default FooterComponent;
