import React from 'react'

// style
import styles from './styles.module.scss'
import { useObserver } from 'mobx-react'
import SwitchButton from 'components/SwitchButton'

const Main: React.FC = () => {
  return useObserver(() => (
    <main className={styles.container}>
      <SwitchButton/>
    </main>
  ))
}

export default Main
