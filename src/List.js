import React from "react";

const List = ({ data, content }) => {
  return (
    <li>
      {data} : {content}
    </li>
  )
}

export default List