import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './LoadingBolt.css';
import _ from 'lodash';

interface LoadingBoltProps {
    dependences?: any[]; // Assuming dependences is an array, adjust the type as necessary
    isDependences: boolean;
    timeOut: number;
    onLoadingComplete: () => void; // Callback function type
}
const LoadingBolt: React.FC<LoadingBoltProps> = ({ dependences = [], isDependences, timeOut, onLoadingComplete }) => {
    const fadeInOut = useSpring({
        opacity: 1,
        position: 'absolute',
        top: '55%',
        left: '46%',
        transform: 'translate(-50%, -50%)',
        zIndex: 99,
    });

    useEffect(() => {
        // Simulate an asynchronous operation (e.g., API request) after 2 seconds
        const fetchData = async () => {
            try {
                // Simulate an asynchronous operation (replace with your actual code)
                await new Promise(resolve => setTimeout(resolve, timeOut));

                // Set loading to false after the asynchronous operation
                const dependencesEmpty = _.isEmpty(dependences);
                if ((isDependences && dependencesEmpty) || !isDependences) {
                    onLoadingComplete();
                }


            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error if needed
            }
        };

        // Call the fetchData function
        fetchData();
    }, [dependences, isDependences, timeOut, onLoadingComplete]); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount


    return (
        <animated.div style={fadeInOut as any}>
            <div className='loading working' title="Loading..">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </animated.div>
    );
};

export default LoadingBolt;
