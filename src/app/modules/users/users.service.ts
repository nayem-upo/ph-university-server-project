import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { UserModel } from "../users.models";
import { TUser } from "./users.interface";


const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    const userData: Partial<TUser> = {};
    // if password not given use defaultnpass
    if (!password) {
        userData.password = config.default_pass as string;
    } else {
        userData.password = password
    }
    //set the role as student
    userData.role = 'student'
    //set manually generated id
    userData.id = '2030100006'

    // create a user
    const newUser = await UserModel.create(userData);
    // create a student
    if (Object.keys(newUser).length) {
        // set id, _id as user
        studentData.id = newUser.id;
        studentData.user = newUser._id; // reference _id
        const newStudent = await Student.create(studentData)
        return newStudent
    }
};


// creating an user
const createUserToDb = async (user: TUser) => {
    const result = await UserModel.create(user);
    return result;
}
//getting all users from db
const getAllUsersFromDb = async () => {
    const result = await UserModel.find({}, { username: 1, fullName: 1, age: 1, email: 1, address: 1, _id: 0 });
    return result;
}
// getting single user by id
const getUserByUserId = async (userId: number) => {
    const user = await UserModel.findOne({ userId }, { _id: 0, password: 0, orders: 0 });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}
// updating an user informations
const updateUserInDb = async (userId: number, updatedUserData: TUser) => {
    const result = await UserModel.findOneAndUpdate({ userId }, updatedUserData, { new: true, projection: { _id: 0, password: 0, orders: 0 } });
    if (!result) {
        throw new Error('User not exist');
    }
    return result;
}
// deleting an user from db
const deleteUserFromDb = async (userId: number) => {
    try {
        await UserModel.deleteOne({ userId })
    } catch (error) {
        throw new Error('Error deleting user from the database');
    }
}

export const userServices = {
    createStudentIntoDB,
    createUserToDb,
    getAllUsersFromDb,
    getUserByUserId,
    updateUserInDb,
    deleteUserFromDb,
}