import React from "react";

const List = ({ name, content }) => {
  return (
    <li>
      {name} : {content}
    </li>
  )
}

export default List;