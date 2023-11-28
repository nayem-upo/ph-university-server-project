import { TSemester, TsemesterNameCodeMapper } from "./semester.interface";
import { SemesterModel } from "./semester.model";

const createSemesterIntoDB = async (payLoad: TSemester) => {

    const semesterNameCodeMapper: TsemesterNameCodeMapper = {
        Autumn: '01',
        Summer: '02',
        Fall: '03',
    }
    if (semesterNameCodeMapper[payLoad.name] !== payLoad.code) {
        throw new Error(`Invalid semester code`)
    }

    const result = await SemesterModel.create(payLoad);
    return result;
};

const getAllSemesterFromDB = async () => {
    const result = await SemesterModel.find();
    return result;
}

const getSingleSemesterFromDB = async (_id: string) => {
    const result = await SemesterModel.findOne({ _id })
    return result;
}

const updateSingleSemesterToDB = async (_id: string, payLoad: TSemester) => {
    const semesterExists = await SemesterModel.semesterExists(_id);
    const semesterNameCodeMapper: TsemesterNameCodeMapper = {
        Autumn: '01',
        Summer: '02',
        Fall: '03',
    }
    if (semesterNameCodeMapper[payLoad.name] !== payLoad.code) {
        throw new Error(`Invalid semester code`)
    }
    if (!semesterExists) {
        throw new Error('Semester does not exist');
    }
    const result = await SemesterModel.findOneAndUpdate({ _id }, payLoad, { new: true })
    return result;
}

export const semesterServices = {
    createSemesterIntoDB,
    getAllSemesterFromDB,
    getSingleSemesterFromDB,
    updateSingleSemesterToDB
}