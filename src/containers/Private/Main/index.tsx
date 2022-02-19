import React from 'react'

// style
import styles from './styles.module.scss'
import { useObserver } from 'mobx-react'

const Main: React.FC = () => {
  return useObserver(() => (
    <main className={styles.container}>
      <button>fg</button>
    </main>
  ))
}

export default Main
