import styles from "./Sidebar.module.css";
import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // Import Tooltip CSS
import './tooltipStyles.css'; // Import custom Tooltip CSS
import { useNavigate } from "react-router-dom";
import SidebarDynamicIcon from './SidebarDynamicIcon';

function Sidebar() {
  const [activeSegment, setActiveSegment] = useState('home');
  const navigate = useNavigate();
  const links = [
    {
      label: 'FaHome',
      path: '',
      targetSegment: 'home',
      tooltip: 'HOME'
    },
    {
      label: 'FaUser',
      path: 'about',
      targetSegment: 'about',
      tooltip: 'About me'
    },
    {
      label: 'FaBriefcase',
      path: 'projects',
      targetSegment: 'projects',
      tooltip: 'My Projects'
    },
    {
      label: 'MdThumbUp',
      path: 'recommendations',
      targetSegment: 'recommendations',
      tooltip: 'Recommendations'
    },
    {
      label: 'FaEnvelopeOpen',
      path: 'contact',
      targetSegment: 'contact',
      tooltip: 'Contact me'
    },
  ];

  const handleClick = (activeSegment) => {
    setActiveSegment(activeSegment);
    navigate(`/${activeSegment}`);
  };

  return (
    <aside className={styles.sidebarContainer}>
      {links.map((link, index) => (
        <div
          key={index}
          className={`${styles.link} ${link.targetSegment} ${activeSegment === link.targetSegment && `${styles.focus}`}`}
          onClick={() => handleClick(link.targetSegment)}
          data-tooltip-id={`tooltip-${index}`} // Unique ID for each tooltip
          data-tooltip-content={link.tooltip} // Custom content for each tooltip
        >
          <SidebarDynamicIcon type={link.label} />
        </div>
      ))}
      {links.map((link, index) => (
        <Tooltip key={index} id={`tooltip-${index}`} className="custom-tooltip" place="left" variant="light" />
      ))}
    </aside>
  );
}

export default Sidebar;
