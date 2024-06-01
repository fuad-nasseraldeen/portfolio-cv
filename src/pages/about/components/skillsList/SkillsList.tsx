import styles from "./SkillsList.module.css";

import { RootState } from '@/utill/types.jsx'
import _ from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
const SkillsList = () => {
  const profile = useSelector((state: RootState) => state.profile)
  const { skillsSet } = profile

  const [skillsCategory, setSkillsCategory] = useState<string[]>([])
  const skills = !_.isEmpty(skillsSet?.skills) ? skillsSet.skills : undefined

  useEffect(() => {
    // ComponentDidMount logic can go here
    !_.isEmpty(skills) && setSkillsCategory(Object.keys(skills))
  }, [skills, skillsSet]);


  return (
    <ul className={styles.ul}>
      {skillsCategory.map((category) => {
        
        return (
<>
          <li className={styles.title}>{category}</li>
          <div className={styles.skills} key={skillsCategory?._id?.$oid}>
            
            {skills?.[category].map((skill) => {
              return (
                <div key={skill?._id?.$oid} className={styles.skill} data-aos="zoom-in-up" data-aos-duration="1000" >
                  <div className={styles.svgImage}>
                    <svg>
                      <use xlinkHref={`SVG/symbol-defs.svg#icon-${skill.svgId}`}></use>
                    </svg>
                  </div>
                  <h4>{skill.value}</h4>
                </div>
              )
            }
            )}
          </div></>
        )
      })}
    </ul>
  );
}

export default SkillsList;
