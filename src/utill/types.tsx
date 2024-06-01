export interface RootState {
    profile: {
        firstName: string,
        lastName: string,
        role: string[],
        avatar: string,
        address: string,
        email: string,
        roleDescription: {
            type: string,
        },
        aboutme: {
            title: string,
            description: string[],
        },
        socialLinks: SocialLink[],
        skillsSet: {
            title: string,
            skills: {
                [key: string]: [{
                    value: string,
                    svgId: string,
                    _id: {
                        $oid: string,
                    },
                }]
            }
        }
        projectsData: {
            title: string,
            projects: Project[]
        },
        workData: {
            title: string,
            works: Work[]
        },
        coursesData: {
            title: string,
            courses: Course[]
        },
        educationData: {
            title: string,
            education: Education[]
        },
        recommendationsData: {
            title: string,
            recommendations: Recommendation[]
        },
        awardsData: {
            title: string,
            awards: string[]
        }
    }
}

export type Profile = {
    firstName: string,
    lastName: string,
    role: string[],
    avatar: string,
    address: string,
    email: string,
    roleDescription: {
        type: string,
    },
    aboutme: {
        title: string,
        description: string[],
    },
    socialLinks: SocialLink[],
    skillsSet: {
        title: string,
        skills: {
            [key: string]: [{
                value: string,
                svgId: string,
                _id: {
                    $oid: string,
                },
            }]
        }
    }
    projectsData: {
        title: string,
        projects: Project[]
    },
    workData: {
        title: string,
        works: Work[]
    },
    coursesData: {
        title: string,
        courses: Course[]
    },
    educationData: {
        title: string,
        education: Education[]
    },
    recommendationsData: {
        title: string,
        recommendations: Recommendation[]
    },
    awardsData: {
        title: string,
        awards: string[]
    }
};

export type Course = {
    courseName: string;
    monthStartDate: string;
    yearStartTime: string;
    monthEndDate: string;
    yearEndTime: string;
    role: string;
    imgurl: string;
    description: string[];
    skills: string[];
};
export type Education = {
    name: string,
    role: string,
    MonthOfLeaving: string,
    YearOfLeaving: string,
    MonthOfStarting: string,
    YearOfStarting: string,
}
export type Project = {
    _id: {
        $oid: string
    },
    name: string,
    description: string,
    frameworks: [
        {
            name: string,
            color: string,
        },
    ],
    imgurl: string,
    giturl: string,
    demourl: string,
    readme: { type: string, default: null },
}
export type Recommendation = {
    avatar: string,
    description: [string],
    linkedinUrl: string,
    role: string,
    name: string,
    imgName: string,
    source: string,
}
export type SocialLink = {
    name: string,
    url: string,
    className: string,
    img: string,
    wrapper: string
}
export type Work = {
    _id: {
        $oid: string
    },
    name: string,
    role: string,
    specialization: [string],
    MonthOfLeaving: string,
    YearOfLeaving: string,
    MonthOfStarting: string,
    YearOfStarting: string,
}
export type WorkData = {
    title: string,
    works: {
        _id: {
            $oid: string
        },
        name: string,
        role: string,
        specialization: [string],
        MonthOfLeaving: string,
        YearOfLeaving: string,
        MonthOfStarting: string,
        YearOfStarting: string,
    }
}