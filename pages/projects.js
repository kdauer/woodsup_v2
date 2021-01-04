import Link from 'next/link'
import styles from '../styles/projects.module.sass'
import ProjectsData from "../data/projects.json"

const projects = ProjectsData.projects;

const Projects = (props) => {
  console.log(projects)
  return (
    <div className={styles.home}>
          {props.projects.map(project => {
              <div key={project.id}>
              {project.image ? (
                <div className={styles.box}>
                  <img
                    className={styles.projectImg}
                    src={project.image}
                    alt="Projectpicture"
                  />
                  <div className={styles.mask}>
                    <Link
                      href={`/projects/${project.id}`}
                      props={project.image}
                      className={styles.link}
                    >
                      <p className={styles.project_title}>{project.title}</p>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={styles.project_heading}>
                  <Link
                    href={`/projects/${project.id}`}
                    props={project.image}
                    className={styles.link_without_image}
                  >
                    <p>• {project.title}</p>
                  </Link>
                </div>
              )}
            </div>
          })
          }
          </div>
        )}

Projects.getInitialProps = () => {
          return {
            projects: projects
          }
        }

export default Projects