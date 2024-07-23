import { bahrainData } from "./bahrainData";

export const dummyData = bahrainData.map((d) => {
    return {
        ...d,
        PopFemale: '0',
        PopMale: '0',
    };
});
