import { TaskItem } from '../TaskItem'

import Clipboard from '../../assets/clipboard.svg'

import styles from './styles.module.scss'

export function Tasks() {
  return (
    <>
      <div className={styles.infosHeader}>
        <div>
          Tarefas criadas <span>5</span>
        </div>
        <div>
          Concluídas <span>2 de 5</span>
        </div>
      </div>

      <div className={styles.taskList}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />

        {/* <div className={styles.taskListEmpty}>
          <img src={Clipboard} alt='Clipboard' />
          <p>
            <b>Você ainda não tem tarefas cadastradas</b>
            <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div> */}
      </div>
    </>
  )
}
