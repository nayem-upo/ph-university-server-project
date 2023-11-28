import { Request, Response } from "express"
// import { UserValidationSchema } from "./users.validation";
import { userServices } from "./users.service";
import catchAsync from "../../utilities/catchAsync";

const createStudent = catchAsync(async (req: Request, res: Response) => {
    const { password, student: studentData } = req.body;

    const result = await userServices.createStudentIntoDB(password, studentData);

    res.status(200).json({
        success: true,
        message: 'Student is created succesfully',
        data: result,
    });
});

// const createUser = async (req: Request, res: Response) => {
//     try {
//         const newUser = UserValidationSchema.parse(req.body);
//         if (!newUser.password) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Password is required',
//             });
//         }
//         const userWithoutPassword = {
//             ...newUser,
//             password: undefined
//         };

//         res.status(201).json({
//             success: true,
//             message: 'User is created successfully!',
//             data: userWithoutPassword,
//         });
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: 'Invalid data format',
//             error: err
//         });
//     }
// }
export const UserController = {
    // createUser,
    createStudent
}