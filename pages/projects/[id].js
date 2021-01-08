import { useRouter } from 'next/router'
import styles from '../../styles/projectdetail.module.sass'
import projects from '../../data/projects_de.json'

const projectsList = projects.projects;

const Project = () => {
    const router = useRouter()
    const { pid } = router.query
    console.log("pid",pid)

    // const { params } = projectsList.match;
    const project = projectsList.find(el => {
    return el.id === pid;
  });

    if (!project) {
        return <div>Loading</div>;
      }
      return (
        <div className={styles.detail_container}>
          <h2>{project.title}</h2>
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div></div>
          )}
          <p>{project.content}</p>
          {project.video ? (
            <div className={styles.video_container}>
            <video className={styles.player}
       url={project.video} width='100%'
      height='100%' /></div>
          ) : (
            <div></div>
          )}
          {project.presslink ? (
            <a href={project.presslink}>"Presse"</a>
          ) : (
            <p></p>
          )}
        </div>
      );
}
export default Project;