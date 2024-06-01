import React, { useState } from 'react'
import { Profile, RootState } from '@/utill/types.tsx'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import './RecommendationsPage.css'
import NotFound from 'components/notfound/NotFound';

import PageHeading from 'components/pageHeading/PageHeading'
import LoadingBolt from 'components/loading/LoadingBolt.tsx';
import RecommendationsList from '../RecommendationsList/RecommendationsList';

const RecommendationsPage = () => {

    const [loading, setLoading] = useState(true)
    const profile: Profile = useSelector((state: RootState) => state.profile)
    const { recommendationsData, socialLinks } = profile
    const recommendations = !_.isEmpty(recommendationsData?.recommendations) ? recommendationsData.recommendations : undefined

    const handleLoadingComplete = async () => {
        // Fetch data or perform any action needed after loading is complete
        setLoading(false)
    };
    const displayRecommendationsList = () => {
        return (
            <RecommendationsList recommendations={recommendations} socialLinks={socialLinks} />
        )
    }
    const viewMyLinkedin = () => {
        const linkedin = socialLinks?.find(social => social.name === 'linkedin')?.url
        return (
            <div className='recommendations-message'>
                <a className='source-massege'>Feel free to check the references on </a>
                <a className='linkedin-source' target="_blank" rel="noreferrer" href={linkedin}>my LinkedIn profile </a>
                <a className='source-massege'>under Recommendations section.</a>
            </div>
        )
    }
    return (
        <main className='recommendations'>
            {!_.isEmpty(recommendationsData?.title) &&
                <PageHeading secondaryTitle={recommendationsData?.title} primaryTitle={recommendationsData?.title} />}
            {loading ? (
                <LoadingBolt isDependences={false} timeOut={1000} onLoadingComplete={handleLoadingComplete} />
            ) : (
                !_.isEmpty(recommendations) ? (
                    <>
                        {viewMyLinkedin()}
                        {displayRecommendationsList()}
                    </>
                ) : (
                    <NotFound message='No Recommendations Found , please try again!' />
                )
            )}
        </main >
    )
}

export default RecommendationsPage