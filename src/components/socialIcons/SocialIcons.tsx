
import styles from './SocilIcons.module.css';
import { SocialLink } from '@/utill/types.tsx';

import { FaEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Profile, RootState } from '@/utill/types.jsx'
import { useSelector } from 'react-redux';

function SocialIcons() {
  const profile: Profile = useSelector((state: RootState) => state.profile);

  const dataFetched = profile !== null && Object.keys(profile).length !== 0;

  const { socialLinks, email } = profile

  const linkedinSocialLink = socialLinks?.filter(socialIcon => socialIcon.name === 'linkedin') // Filter social links to find LinkedIn
    .map(socialLink => socialLink as SocialLink)[0]; // Cast the result to SocialLink type (if needed)

  const githubSocialLink = socialLinks?.filter(socialIcon => socialIcon.name === 'github') // Filter social links to find LinkedIn
    .map(socialLink => socialLink as SocialLink)[0]; // Cast the result to SocialLink type (if needed)

  const whatsappSocialLink = socialLinks?.filter(socialIcon => socialIcon.name === 'whatsapp') // Filter social links to find LinkedIn
    .map(socialLink => socialLink as SocialLink)[0]; // Cast the result to SocialLink type (if needed)

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, url: string) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    window.open(url, '_blank'); // Open the URL in a new tab
  }

  return (
    <div className={styles.socialIconsContainer}>
      {dataFetched && <>
        <div className={styles.socialIconsBox} onClick={(event) => handleClick(event, linkedinSocialLink?.url)}>
          <a className={styles.icon} href={linkedinSocialLink?.url} target='_blank' rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <div className={styles.socialIconsBox} onClick={(event) => handleClick(event, githubSocialLink?.url)}>
          <a className={styles.icon} href={githubSocialLink?.url} target='_blank' rel="noreferrer">
            <FaGithub />
          </a>
        </div>
        <div className={styles.socialIconsBox} onClick={(event) => handleClick(event, whatsappSocialLink?.url)}>
          <a className={styles.icon} href={whatsappSocialLink?.url} target='_blank' rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
        <div className={styles.socialIconsBox} onClick={(event) => handleClick(event, `mailto:${email}`)}>
          <a className={styles.icon} href={`mailto:${email}`}>
            <FaEnvelope />
          </a>
        </div>
      </>}
    </div>
  );
}

export default SocialIcons;
