import { Schema, model } from "mongoose";
import { TSemester } from "./semester.interface";

// The user schema
const semesterSchema = new Schema<TSemester>({
    name: { type: String, enum: ['Autumn', 'Summer', 'Fall'], required: true },
    code: { type: String, enum: ['01', '02', '03'], required: true },
    year: { type: String, required: true },
    startMonth: { type: String, enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], required: true },
    endMonth: { type: String, enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], required: true },
}, {
    timestamps: true
})

export const SemesterModel = model<TSemester>('Semester', semesterSchema)