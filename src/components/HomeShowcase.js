import React from "react";
import { Typography } from 'antd';

const { Text, Title } = Typography;

const HomeShowcase = () => {
  return (
    <>
      <Title className="header_container">
        <span className="header">Github User Followers</span>
        <span role="img" aria-label="man_techlogist">👨‍💻</span>
      </Title>
      <Text className="sub_header">
        Know your followers
      </Text>
    </>
  )
}

export default HomeShowcase;