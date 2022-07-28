import { useState, FormEvent, InvalidEvent, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from 'phosphor-react'

import { TaskItem } from '../TaskItem'

import Clipboard from '../../assets/clipboard.svg'
import styles from './styles.module.scss'

interface Task {
  id: string
  description: string
  isComplete: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskDescription, setNewTaskDescription] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (!newTaskDescription) return

    const newTask = {
      id: uuidv4(),
      description: newTaskDescription,
      isComplete: false,
    }

    setTasks([...tasks, newTask])
    setNewTaskDescription('')
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Insira uma nova tarefa!')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskDescription(event.target.value)
  }

  function handleToggleTaskCompletion(id: string) {
    const newTasks = tasks.map(task =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task,
    )

    setTasks(newTasks)
  }

  function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  }

  const totalTasksCompleted = tasks.filter(
    task => task.isComplete === true,
  ).length

  const isNewTaskEmpty = newTaskDescription.length === 0

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.formNewTask}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          value={newTaskDescription}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <button type='submit' disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>

      <div className={styles.infosHeader}>
        <div>
          Tarefas criadas <span>{tasks.length}</span>
        </div>
        <div>
          Concluídas{' '}
          <span>
            {totalTasksCompleted > 0
              ? `${totalTasksCompleted} de ${tasks.length}`
              : totalTasksCompleted}
          </span>
        </div>
      </div>

      <div className={styles.taskList}>
        {tasks.length > 0 ? (
          tasks.map(item => (
            <TaskItem
              key={item.id}
              id={item.id}
              description={item.description}
              isComplete={item.isComplete}
              handleToggleTaskCompletion={handleToggleTaskCompletion}
              handleRemoveTask={handleRemoveTask}
            />
          ))
        ) : (
          <div className={styles.taskListEmpty}>
            <img src={Clipboard} alt='Clipboard' />
            <p>
              <b>Você ainda não tem tarefas cadastradas</b>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </div>
    </>
  )
}
