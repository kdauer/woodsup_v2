import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/projects.module.sass'
import projects from '../data/projects_de.json'

const projectsList = projects.projects;
const sortedList = projectsList.sort((a, b) => b.id - a.id)
console.log(sortedList)
const Projects = (props) => {
  const router = useRouter()

  return (
    <div className={styles.home}>
    {sortedList.map((project) => (
      <div key={project.id}>
                {project.image ? (
                  <div className={styles.box}>
                    <img
                      className={styles.projectImg}
                      src={project.image}
                      alt="Projectpicture"
                    />
                    <div className={styles.mask}>
                      {/* <Link
                        href={`/projects/${project.id}`}
                        props={project}
                      > */}
                       <a className={styles.link} props={project}> <p className={styles.project_title} onClick={() => {
        router.push({
          pathname: '/projects/[pid]',
          query: { pid: project.id },
        })
      }}>
      {project.title}</p></a>
                      {/* </Link> */}
                    </div>
                  </div>
                ) : (
                  <div className={styles.project_heading}>
                    <Link
                      href={`/projects/${project.id}`}
                      props={project.image}
                      replace
                    >
                     <a className={styles.link_without_image}><p>• {project.title}</p></a> 
                    </Link>
                  </div>
                )}
              </div>
                ))}
  </div>
)
}

export default Projects