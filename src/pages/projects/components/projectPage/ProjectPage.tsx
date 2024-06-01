'use client';
import { useEffect, useState } from 'react';
import styles from './ProjectPage.module.css';
import ProjectsSearch from '../projectsSearch/projectsSearch';
import ProjectsFilter from '../projectsFilter/ProjectsFilter';
import NotFound from 'components/notfound/NotFound';
import ProjectCard from '../projectCard/ProjectCard';
import PageHeading from 'components/pageHeading/PageHeading';
import { useSelector } from 'react-redux';
import { Profile, RootState } from 'utill/types';
import LoadingBolt from 'components/loading/LoadingBolt.tsx';
function ProjectPage() {
  const profile: Profile = useSelector((state: RootState) => state.profile);
  const projects = profile?.projectsData?.projects || []
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [filteredValue, setFilteredValue] = useState('all');
  const [filteredList, setFilteredList] = useState(projects);

  function handleSearch(list) {
    if (query.length === 0) {
      setFilteredList(list);
      return;
    }
    const searchedProject = list.filter((project) => project?.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredList(searchedProject);
  }

  function handleFilter() {
    const filteredProjects = projects?.filter(project => {
      return project?.frameworks?.find(framework => framework?.name?.toLowerCase() === filteredValue);
    });

    return filteredProjects

  }

  const handleLoadingComplete = async () => {
    // Fetch data or perform any action needed after loading is complete
    setLoading(false)
  };
  useEffect(() => {
    if (filteredValue === 'all') {
      handleSearch(projects);
      return;
    }
    handleSearch(handleFilter());
  }, [query, filteredValue, projects]);

  return (
    <main className={styles.projectPage}>
      <PageHeading secondaryTitle='my work' primaryTitle='my portfolio' />

      <div className={styles.searchContainer}>
        <ProjectsSearch setQuery={setQuery} />
        <ProjectsFilter filteredValue={filteredValue} setFilteredValue={setFilteredValue} />
      </div>
      {loading ? <LoadingBolt isDependences={false} timeOut={1000} onLoadingComplete={handleLoadingComplete} /> : (
        filteredList.length > 0 ? (
          <div className={styles.projectContainer}>
            {filteredList.map((project) => (
              <ProjectCard project={project} key={project._id?.$oid} />
            ))}
          </div>
        ) : (
          <NotFound message='No Projects Found , please try again!' />
        )
      )}
    </main>
  );
}
export default ProjectPage;
