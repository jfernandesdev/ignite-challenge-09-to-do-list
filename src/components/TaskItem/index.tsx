import { Trash } from "phosphor-react";

import styles from './styles.module.scss'

export function TaskItem() {
  return (
    <div className={styles.taskItem}>
      <label className={styles.checkmark}>
        <input type="checkbox" />
        <span />
      </label>

      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button><Trash /></button>
    </div>
  )
}