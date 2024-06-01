// eslint-disable-next-line @typescript-eslint/no-explicit-any

// let isSettProfileCalled = false;
import { Profile } from 'utill/types';
import resumeData from '../resumeData'
const typedResumeData: Profile = resumeData;
export const setProfileData = (data: Profile | null) => {
    return {
        type: 'SET_PROFILE_DATA',
        payload: data,
    }
}

// Get current users profile
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProfile = async (dispatch: any) => {

    try {
        dispatch(setProfileData(typedResumeData));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Error fetching profile:', error);
        dispatch({
            type: 'PROFILE_ERROR',
            payload: {
                msg: error.response?.data.msg,
                statusText: error.response?.statusText,
                status: error.response?.status,
            },
        });
    }


    // try {
    //     const res = await axios.get('/api/profile/me');
    //     if (res) {
    //         dispatch(setProfileData(res.data));
    //     }
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // } catch (error: any) {
    //     console.error('Error fetching profile:', error);
    //     dispatch({
    //         type: 'PROFILE_ERROR',
    //         payload: {
    //             msg: error.response?.data.msg,
    //             statusText: error.response?.statusText,
    //             status: error.response?.status,
    //         },
    //     });
    //     if (!isSettProfileCalled) {
    //         isSettProfileCalled = true;
    //         settProfileToDB(dispatch);
    //     }
    // }

};

// Set profile to DB
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const settProfileToDB = async (dispatch: any) => {

//     try {
//         const res = await axios.post('/api/profile');
//         if (res) {
//             dispatch(setProfileData(res.data));
//         }
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//         console.error('Error fetching profile:', error);
//         dispatch({
//             type: 'PROFILE_ERROR',
//             payload: {
//                 msg: error.response?.data.msg,
//                 statusText: error.response?.statusText,
//                 status: 500,
//             },
//         });
//     }

// };