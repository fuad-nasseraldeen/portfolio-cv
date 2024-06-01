
import { Work } from '@/utill/types.tsx';
import styles from './ExperienceList.module.css'
interface Props {
  experiences: Work[];
}
const ExperienceList = ({ experiences }: Props) => {
  return (
    <>
      {experiences?.map((experience, index) => {
        return (
          <div key={experience?._id?.$oid}>
            <p>
               {experience?.name}, {experience?.role}, {experience?.YearOfStarting}
            </p>
            <p>My role was:</p>
              <ul className={styles.ul}>
                {experience?.specialization?.map((spec, index) => (
                  <li key={index} className={styles.li}>
                    {spec}
                  </li> 
                ))}
                &nbsp;
              </ul>
          </div>
        );
      })}
    </>
  );
};

export default ExperienceList;
