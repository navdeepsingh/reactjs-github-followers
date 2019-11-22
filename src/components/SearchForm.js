import React from "react"
import { Input } from "antd"

const { Search } = Input
const SearchForm = ({ handleChange, value, searchHandler }) => {
  return (
    <div className="search_container">
      <Search
        type="text"
        addonBefore="@"
        onChange={handleChange}
        value={value}
        placeholder="Github handle"
        onSearch={searchHandler}
        className="search"
      />
    </div>
  )

}

export default SearchForm