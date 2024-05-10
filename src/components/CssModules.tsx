import styles from './CssModules.module.scss'

export const CssModules = () => {
  return (
    <div>
      <p className={styles.title}>CSS Modules</p>
      <button className={styles.button}>FIGHT!!</button>
    </div>
  )
}