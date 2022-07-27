import styles from './styles.module.scss'

import LogoToDo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoToDo} alt="To Do List"/>
    </header>
  )
}