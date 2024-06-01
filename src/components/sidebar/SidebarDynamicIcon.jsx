import { FaBriefcase, FaEnvelopeOpen, FaHome, FaUser } from 'react-icons/fa';
import { MdThumbUp } from 'react-icons/md';

function SidebarDynamicIcon({ type }) {
  const FaIcon = components[type];
  return <FaIcon />;
}

const components = {
  FaBriefcase,
  FaEnvelopeOpen,
  FaHome,
  FaUser,
  MdThumbUp,
};

export default SidebarDynamicIcon;
