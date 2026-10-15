import { Header } from './components/Header'
import styles from './app.module.css'


export default function APp() {
    return (
        <div className={styles.container}>
       <main>
        <Header />
      </main>
        </div>
    )
}