import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'
import styles from '../styles/projectdetail.module.sass'
import Projects from '../../resources/projects.json'

const Project = ({ project }) => {
    // Render post...
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
  
  export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    
    const projects = Projects
  
    // Get the paths we want to pre-render based on posts
    const paths = projects.map((project) => `/posts/${project.id}`)
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  export default Project