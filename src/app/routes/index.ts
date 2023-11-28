import { Router } from "express";
import { userRoutes } from "../modules/users/users.route";
import { StudentRoutes } from "../modules/student/student.route";
import { SemesterRoutes } from "../modules/academicSemester/semester.route";

export const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoutes
    },
    {
        path: '/students',
        route: StudentRoutes
    },
    {
        path: '/semesters',
        route: SemesterRoutes
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route))