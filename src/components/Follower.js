import React from "react"

const Follower = ({ followers }) => {

  const follower =
    Object.keys(followers).map(item => {
      return item.login
    })


  return (
    <div className="follower">
      {follower}
    </div>
  )

}

export default Follower