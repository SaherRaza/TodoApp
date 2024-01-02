import { Schema, model } from "mongoose";

// const note = {
//     title: "This is my note",
//     description:""
// }
export interface NoteDocument {
    title: string;
    description?: string;  // optional
}

const noteSchema = new Schema({
    title: {
        type: String,
        require: true, // by default its false
        trim:true
    },
    description: {
        type: String,
        trim:true
    }
})

export default model<NoteDocument>("Note", noteSchema);