import Gallery from "./Gallery"
import {Profile, Contact, About} from "./Profile"
import TodoList from "./component/TodoList"
import Bio from "./component/Bio"
import Avatar from "./component/Avatar"
import TodoList2 from "./component/TodoList2"

export default function App() {
  return (
    <div>
      <TodoList2/>
      <Gallery/>
      <Profile/>
      <Contact/>
      <About/>
      <TodoList/>
      <Bio/>
      <Avatar/>
    </div>
  )
}