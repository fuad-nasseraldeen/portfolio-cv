import './ProjectsFilter.css';

function ProjectsFilter({ filteredValue, setFilteredValue }) {
  return (
    <select value={filteredValue} onChange={(e) => setFilteredValue(e.target.value)} className='select'>
      <option value='all'>All</option>
      <option value='react'>React</option>
      <option value='springboot'>Springboot</option>
      <option value='java'>Java</option>
      <option value='material ui'>material ui</option>
    </select>
  );
}

export default ProjectsFilter;
