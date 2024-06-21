

// const mockTodos = [
//   {
//     id: '1',
//     title: 'todo I',
//     completed: false
//   },
//   {
//     id: '2',
//     title: 'todo II',
//     completed: false
//   }, 
//   {
//     id: '3',
//     title: 'todo III',
//     completed: false
//   },
// ]

import { useState } from "react"
import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

const App = () => {

  const [count, setCount] = useState(1)

  return (
    <>
      <Heading 
        title={"Hola Typescript"}
      />
      <Section 
        // title={"This is my first section"}
      >
        <p>Hola</p>
      </Section>
      <Counter 
        setCount={setCount}
      >
        The count is {count}
      </Counter>
      <List items={['coffee', 'Tacos', 'Code']} render={(item: string) => <span className="text-red-500">{item}</span>}/>
    </>
  )
}

export default App
