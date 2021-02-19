import styles from '../styles/links.module.sass'
import links from '../data/links.json'

const linklist = links.links;

const Motivation = () => {
    return (
        <div className={styles.home}>
        <div className={styles.space}>
        <ul className={styles.motivation}>
        {linklist.map((link) => (
        <li key={link.id}><a href={link.href}>{link.title}</a></li>
      ))}
        </ul>
      </div>
      </div>
    )
}

export default Motivation