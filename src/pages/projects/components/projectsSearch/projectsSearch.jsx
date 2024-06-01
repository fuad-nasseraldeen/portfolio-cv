import { memo } from 'react';
import style from './projectsSearch.module.css';

function ProjectsSearch({ setQuery }) {
  return (
    <input
      type='search'
      onChange={(e) => setQuery(e.target.value)}
      placeholder='Search for project....'
      className={style.searchInput}
    />
  );
}

export default memo(ProjectsSearch);
