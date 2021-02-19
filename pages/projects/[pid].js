import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '../../styles/projectdetail.module.sass'
import Carousel from 'react-bootstrap/Carousel'
import projects from '../../data/projects_de.json'

const projectsList = projects.projects;

const Project = () => {
  const router = useRouter()
  const { pid } = router.query
  const project = projectsList.find(el => {
    // console.log(el)
  return el.id === pid;
  });
  const images = project.gallery;
  const presslinks = project.presslinks;
console.log(project.id)
    if (!project) {
        return <div>Loading</div>;
      } else 
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
            <iframe  width="560" height="315" src={project.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          ) : (
            <div></div>
          )}
          {images ? (
          <Carousel className="carousel-custom">
          {images.map((image) => (
            <Carousel.Item key={image}>
            <img
              className="d-block w-100"
              src={image}
              alt="slide"
                />
            </Carousel.Item>
            ))}
            </Carousel>):(<div></div>)}
          {presslinks ? (
            <ul>  
            <h5>Für Presseartikel</h5>
            {presslinks.map((link) =>(
              <li><a href={link}>hier entlang</a></li>
            ))}
            </ul>
          ) : (
            <p></p>
          )}
        </div>
      );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})

export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
   paths: [
     { params: { pid: '1' } }, 
     { params: { pid: '2' } }, 
     { params: { pid: '3' } }, 
     { params: { pid: '4' } }, 
     { params: { pid: '5' } }, 
     { params: { pid: '6' } }, 
     { params: { pid: '7' } }, 
     { params: { pid: '8' } }, 
     { params: { pid: '9' } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  }
}

export default Project
