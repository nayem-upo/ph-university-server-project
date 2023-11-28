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

export const SemesterController = {
    createSemester
}