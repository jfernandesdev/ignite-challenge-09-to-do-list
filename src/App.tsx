import { Header } from './components/Header'
import { FormNewTask } from './components/FormNewTask'
import { Tasks } from './components/Tasks'

import './styles/global.scss'

export function App() {
  return (
    <>
      <Header />
      <FormNewTask />
      <Tasks />
    </>
  )
}
