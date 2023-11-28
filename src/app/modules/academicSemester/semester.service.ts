import { TSemester } from "./semester.interface";
import { SemesterModel } from "./semester.model";
;


const createSemesterIntoDB = async (payLoad: TSemester) => {
    const result = await SemesterModel.create(payLoad);
    return result;
};

export const semesterServices = {
    createSemesterIntoDB
}