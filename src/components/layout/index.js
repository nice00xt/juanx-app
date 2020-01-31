import React from 'react';
import { Layout } from 'antd';

export const LayoutContent = ({ children }) =>{
  return (
    <Layout>
      { children }
    </Layout>
  )
}

export default LayoutContent;