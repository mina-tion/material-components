import React from 'react'

// style
import styles from './styles.module.scss'
import { useObserver } from 'mobx-react'
import SwitchButton from 'components/SwitchButton'
import Tags from 'components/Tags'

const Main: React.FC = () => {
  return useObserver(() => (
    <main className={styles.container}>
      <SwitchButton label='Open'/>
      <Tags />
    </main>
  ))
}

export default Main
