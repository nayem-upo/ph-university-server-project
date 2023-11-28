import { Model, Schema, model } from "mongoose";
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

semesterSchema.pre('save', async function (next) {
    const isSemesterExist = await SemesterModel.findOne({
        name: this.name,
        year: this.year
    })
    if (isSemesterExist) {
        throw new Error("Semester is already exists!")
    }
    next()
})


export interface ISemesterModel extends Model<TSemester> {
    // eslint-disable-next-line no-unused-vars
    semesterExists(_id: string): Promise<boolean>;
}
semesterSchema.statics.semesterExists = async function (_id: string): Promise<boolean> {
    const semester = await this.findOne({ _id });
    return !!semester;
};

export const SemesterModel = model<TSemester, ISemesterModel>('Semester', semesterSchema)