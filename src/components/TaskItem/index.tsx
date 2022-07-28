import { Trash } from 'phosphor-react'

import styles from './styles.module.scss'

interface TaskItemProps {
  id: string
  description: string
  isComplete: boolean
  handleToggleTaskCompletion: (id: string) => void
  handleRemoveTask: (id: string) => void
}

export function TaskItem({
  id,
  description,
  isComplete,
  handleToggleTaskCompletion,
  handleRemoveTask,
}: TaskItemProps) {
  return (
    <div className={styles.taskItem}>
      <div>
        <label className={styles.checkmark}>
          <input
            type='checkbox'
            readOnly
            checked={isComplete}
            onClick={() => handleToggleTaskCompletion(id)}
          />
          <span />
        </label>

        <p className={isComplete ? styles.completed : ''}>{description}</p>
      </div>
      <button type='button' onClick={() => handleRemoveTask(id)}>
        <Trash />
      </button>
    </div>
  )
}
