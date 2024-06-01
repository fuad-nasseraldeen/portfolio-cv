import { FaGithub } from 'react-icons/fa';
import styles from './ProjectCard.module.css';
import _ from 'lodash';
function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={project.imgurl} alt={project.title} />
      </div>
      <div className={styles.cardBody}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <a href={project.demourl} target='_blank' rel='noreferrer'>
          {!_.isEmpty(project.demourl) && 'View Demo'}
        </a>
        <a href={project.giturl} target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
