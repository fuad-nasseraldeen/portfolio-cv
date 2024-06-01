'use client';
import styles from './ContactPage.module.css';

import { useSelector } from 'react-redux';
import { Profile, RootState } from '@/utill/types';

import SocialIcons from 'components/socialIcons/SocialIcons';
import Form from './components/contactForm/ContactForm';
import PageHeading from 'components/pageHeading/PageHeading';


const ContactPage = () => {
  const profile = useSelector((state: RootState) => state.profile)
  const { address, firstName, lastName, email } = profile as Profile
  return (
    <main className='container'>
      <PageHeading secondaryTitle='contact' primaryTitle='contact me' />
      <div className={styles.contactContainer}>
        <ul className={styles.list}>
          <h3 className={styles.mainTitle}>CONTACT ME HERE</h3>
          <li className={styles.listItem}>
            <span>Name:</span>
            <span>{firstName} {lastName}</span>
          </li>

          <li className={styles.listItem}>
            <span>Email:</span>
            <span>
              <a href={`mailto:${email}`}>{email}</a>
            </span>
          </li>

          <li className={styles.listItem}>
            <span>Address:</span>
            <span>{address}</span>
          </li>

          <SocialIcons />
        </ul>
        <Form email={email} />
      </div>
    </main>
  );
}
export default ContactPage;
