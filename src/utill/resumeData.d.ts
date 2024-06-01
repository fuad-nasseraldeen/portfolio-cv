import { Profile } from "./types";

// resumeData.d.ts
declare module '../../public/data/resumeData.js' {
    const data: Profile; // Adjust the type if possible
    export default data;
}