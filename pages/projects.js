import ProjectsList from "../components/projectslist"
import styles from '../styles/projects.module.sass'

const Projects = () => {
return (
    <div className={styles.home}>
        <ProjectsList />
      </div>
)
}

export default Projects