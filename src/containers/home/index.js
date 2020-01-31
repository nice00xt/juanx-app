import React, { Fragment } from 'react';
import { Layout } from 'antd';
import Counter from '../../components/Counter';

const { Content } = Layout;

export const Home = () => {
  const handleShowNumber = (number) => {
    console.log(number);
  }

  return (
    <Fragment>
      <Content>
        <Counter
          message='Message'
          dateText='dias'
          max={10}
          min={4}
          initialValue={5}
          onChangeCount={handleShowNumber}
        />
      </Content>
    </Fragment>
  )
}

export default Home