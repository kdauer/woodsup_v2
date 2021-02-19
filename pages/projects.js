import Link from 'next/link'
import styles from '../styles/projects.module.sass'
import projects_de from '../data/projects_de.json'
import { withTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import projects_en from '../data/projects_en.json'
import projects_es from '../data/projects_es.json'




const Projects = ({t,props,i18n}) => {

  let projectsList = projects_de.projects
  
  if (i18n.language === 'de') {
    projectsList = projects_de.projects;
  }
  if (i18n.language === 'en') {
    projectsList = projects_en.projects;
  }
  if (i18n.language === 'es') {
    projectsList = projects_es.projects;
  }
  const sortedList = projectsList.sort((a, b) => b.id - a.id)
  
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
                       <a href={`/projects/${project.id}`} className={styles.link} props={project}> <p className={styles.project_title}>
                        {project.title}</p>
                       </a>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})

export default withTranslation('common')(Projects)