import React, {useState} from 'react'
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoIncrement from "./components/ToDoIncrement"

function App() {
      //  deklarasi state todos
      // todos awalnya adalah array
      
      const [todos, setToDos] = useState([
        "Belajar React Fundameental",
        "Ngoding Sampai Bisa"
      ])

      // disini kita akan membuat sebuah function
      // yang digunakan untuk submitHandler di ToDoForm
      const formSubmitHandler = (todo) => {
        console.log("todo dari parent", todo)
        setToDos([...todos, todo])
      }

  return (
    <div className="App">
      <header>
        <h1>Aplikasi ToDo List</h1>
      </header>

      <section>
        <ToDoIncrement/>
      </section>

      <section style= {{margin: "1em 0em"}} >
        {/* di sini sekarang harus menggunakan props
        pada form kita harus ,elempar setToDos dan todos */}
        <ToDoForm propsSubmitHandler={formSubmitHandler}/>
        <ToDoList propsTodos={todos}/>
      </section>

      <footer>
        <h3>Dibuat oleh orang tidak jelas &copy; 2022</h3>
      </footer>
    </div>
  );
}

export default App;
