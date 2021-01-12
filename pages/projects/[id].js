import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { withTranslation } from '../../i18n'
import styles from '../../styles/projectdetail.module.sass'
import Carousel from 'react-bootstrap/Carousel'
import projects from '../../data/projects_de.json'

const projectsList = projects.projects;

const Project = ({t}) => {
    const router = useRouter()
    const { pid } = router.query
    const project = projectsList.find(el => {
    return el.id === pid;
  });
  const gallery = project.gallery;
  console.log(gallery)

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
            <div className={styles.player}>
            <iframe  width="560" height="315" src={project.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          ) : (
            <div></div>
          )}
          <Carousel>
          {gallery.map((el) => (
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={el}
              alt="slide"
                />
            </Carousel.Item>
            ))}
            </Carousel>
          {project.presslink ? (
            <a href={project.presslink}>"Presse"</a>
          ) : (
            <p></p>
          )}
        </div>
      );
}

Project.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Project.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Project)
