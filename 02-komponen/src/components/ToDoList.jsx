import React from 'react'

// disini tidak menggunakan todos lagi

// disini declare ad props yang ingin digunakan
function ToDoList(props) {
  // ini namanya Fragment
  return (
  <>
  <h3>Listing ToDo List</h3>
  <ul>
    {/* disini kita menggunakan props dengan nama propsTodos
    hasil lemparan dari App.js */}
    {props.propsTodos.map((todo) => {
      return <li>{todo}</li>
    }
    )
    }
  </ul>
  </>
  )
}

export default ToDoList