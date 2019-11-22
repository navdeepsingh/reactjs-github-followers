import React from "react"
import { Typography } from "antd"

const { Paragraph, Text } = Typography

const Followers = ({ items }) => {

  const followerHtml = items.map((item) =>
    <li key={item.id} className="column">
      <a href={item.html_url} target="_blank" rel="noopener noreferrer" className="text-center">
        {item.login}
      </a>
      <img src={item.avatar_url} alt={item.login} width="100" />
    </li>
  )


  return (
    <>
      <Text code className="total">
        Total Followers: {items.length}
      </Text>
      <ul className="followers row">
        {followerHtml}
      </ul>
    </>
  )

}

export default Followers