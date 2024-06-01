import styles from './About.module.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Profile, RootState } from '@/utill/types.jsx'
import PageHeading from 'components/pageHeading/PageHeading.jsx';
import ExperienceList from './components/experienceList/ExperienceList.tsx';
import _ from 'lodash';
import SkillsList from './components/skillsList/SkillsList.tsx';
import LoadingBolt from 'components/loading/LoadingBolt.tsx';
function AboutPage() {
  const [loading, setLoading] = useState(true);
  const profile: Profile = useSelector((state: RootState) => state.profile);
  const { firstName, lastName, role, aboutme, educationData } = profile
  const education = !_.isEmpty(educationData) ? educationData?.education : []
  const type = education?.[0]?.role
  const name = education?.[0]?.name
  const startEducation = education?.[0]?.YearOfStarting
  const endEducation = education?.[0]?.YearOfLeaving
  // const { description } = aboutme

  const handleLoadingComplete = async () => {
    // Fetch data or perform any action needed after loading is complete
    setLoading(false)
  };

  return (
    <main className='container'>
      <PageHeading secondaryTitle='My states' primaryTitle={`ABOUT ME`} />
      {loading ? <LoadingBolt isDependences={false} timeOut={1000} onLoadingComplete={handleLoadingComplete} /> : (
        <>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h2 className={styles.aboutBoxTitle}>Who am I ? </h2>
              <p>
                Hello there, My name is {firstName} {lastName}, I'm a {role?.[1]}.
              </p>
              <p>{aboutme?.description}</p>
              {/* <p>
            During this duration, I have learned a lot of technologies, created many cool website, and contributed to
            open-source projects.
          </p>
          <p>
            So I'm always seeking to have an opportunity that matches my skills, to make the best use of all that I have
            learned
          </p> */}
            </div>

            <div className={styles.box}>
              <h2 className={styles.aboutBoxTitle}>Education :</h2>
              <p>
                {`Studies Bachelor of ${type} at ${name}, ${startEducation} - ${endEducation}`}
              </p>
            </div>

            <div className={styles.box}>
              <h2 className={styles.aboutBoxTitle}>Experience :</h2>
              <ExperienceList experiences={profile?.workData?.works} />
            </div>
          </div>

          <div className={styles.skillBox}>
            <h2 className={styles.aboutBoxTitle}>My Skills</h2>
            <SkillsList />
          </div>
        </>
      )}
    </main>
  );
}
export default AboutPage;
