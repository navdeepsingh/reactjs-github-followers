import React from "react"

const Follower = ({ followers }) => {

  const follower = followers.map((item) =>
    <li>{item.login}</li>
  )


  return (
    <ul className="followers">
      {follower}
    </ul>
  )

}

export default Follower