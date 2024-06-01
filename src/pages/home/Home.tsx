import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Profile, RootState } from '@/utill/types.jsx'
import { FaDownload } from "react-icons/fa"
import styles from "./Home.module.css";
import SocialIcons from "components/socialIcons/SocialIcons.tsx";

const pdf = './data/cv.pdf'

const Home = () => {
    const [loading, setLoading] = useState(true);
    const profile: Profile = useSelector((state: RootState) => state.profile);
    const { firstName, lastName, role } = profile
    useEffect(() => {
        // Simulate an asynchronous operation (e.g., API request) after 2 seconds
        const fetchData = async () => {
            try {
                // Simulate an asynchronous operation (replace with your actual code)
                await new Promise(resolve => setTimeout(resolve, 3000));

                // Set loading to false after the asynchronous operation
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error if needed
                setLoading(false); // Set loading to false in case of an error
            }
        };

        // Call the fetchData function
        fetchData();
    }, [loading]); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount
    return (
        <main className={styles.homeContainer}>
            <div className={styles.imgBackground}>

                <div className={styles.shape}></div>
                <div className={styles.imageBox}>
                    <img
                        className={styles.personalImage}
                        src="/assests/home/homeImage1.png"
                        alt="personal"
                        width={350}
                        height={500}
                    />
                </div>
            </div>
            <div className={styles.homeTextContainer}>
                <h1 className={styles.primaryHeading}>
                    Hi, <span>I'm {firstName} {lastName} </span>. A {role?.[1]}.
                </h1>

                <SocialIcons />

                <div className={styles.buttonBox}>
                    <a
                        href={pdf}
                        rel="noreferrer"
                        download
                        target="_self"
                        className={styles.button}
                    >
                        <span className={styles.buttonTxt}>Download CV</span>
                        <span className={styles.buttonIcon}>
                            <FaDownload />
                        </span>
                    </a>
                </div>
            </div>
        </main>
    );
}

export default Home;
