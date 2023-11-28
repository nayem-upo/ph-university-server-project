import { Request, Response } from "express"
import catchAsync from "../../utilities/catchAsync";
import { semesterServices } from "./semester.service";

const createSemester = catchAsync(async (req: Request, res: Response) => {

    const result = await semesterServices.createSemesterIntoDB(req.body);

    res.status(200).json({
        success: true,
        message: 'Semester is created succesfully',
        data: result,
    });
});

const getSemesters = catchAsync(async (req: Request, res: Response) => {
    const result = await semesterServices.getAllSemesterFromDB();
    res.status(200).json({
        success: true,
        message: 'Semesters are retrieved succesfully',
        data: result,
    });
})

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await semesterServices.getSingleSemesterFromDB(req.params.semesterId);
    res.status(200).json({
        success: true,
        message: 'Semester is retrieved succesfully',
        data: result,
    });
})

const updateSingleSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await semesterServices.updateSingleSemesterToDB(req.params.semesterId, req.body);
    res.status(200).json({
        success: true,
        message: 'Semester updated succesfully',
        data: result,
    });
})

export const SemesterController = {
    createSemester,
    getSemesters,
    getSingleSemester,
    updateSingleSemester
}