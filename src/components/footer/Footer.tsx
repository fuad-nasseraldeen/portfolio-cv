import './Footer.css';

import { Profile, RootState, SocialLink } from '@/utill/types.jsx';
import { useSelector } from 'react-redux';
function Footer() {
  const date = new Date().getFullYear();
  const profile: Profile = useSelector((state: RootState) => state.profile);
  
  const { socialLinks, firstName, lastName } = profile

  const linkedinSocialLink = socialLinks?.filter(socialIcon => socialIcon.name === 'linkedin') // Filter social links to find LinkedIn
    .map(socialLink => socialLink as SocialLink)[0];
  
  const linkedInHref = linkedinSocialLink?.url

  return (
    <footer className='footer'>
      <p>
        © {date} Copyright :{' '}
        <a href={linkedInHref} rel='noreferrer' target='_blank'>
          {firstName} {lastName}
        </a>
      </p>
    </footer>
  );
}

export default Footer;
