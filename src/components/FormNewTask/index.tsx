import { useState, FormEvent, InvalidEvent, ChangeEvent } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.scss'

export function FormNewTask() {
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    console.log(newTaskText);
    setNewTaskText('')
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Insira uma nova tarefa!')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <form onSubmit={handleCreateNewTask} className={styles.formNewTask}>
      <input 
        type='text' 
        placeholder='Adicione uma nova tarefa'
        value={newTaskText} 
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required 
      />

      <button 
        type='submit'
        disabled={isNewTaskEmpty}
      >
        Criar
        <PlusCircle size={16}/>
      </button>
    </form>
  )
}
