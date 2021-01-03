import PropTypes from 'prop-types'
import Link from 'next/link'
import { withTranslation } from '../i18n'
import styles from '../styles/projects.module.sass'
import ProjectsData from "../resources/projects.json"

const projects = ProjectsData.projects;

const Projectslist = () => {
    console.log("data: " + projects.id)
    return (
            projects.map(project => {
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
                    className="link"
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
    )}

// Projectslist.getInitialProps = async () => ({
//     namespacesRequired: ['projects'],
//   })
  
//   Projectslist.propTypes = {
//     t: PropTypes.func.isRequired,
//   }

export default Projectslist
