import { RequestHandler } from "express";
import Note, {NoteDocument} from "../models/note"; //model & interface(type)


interface IncomingBody{
    title: string;
    description?: string;
}

export const create: RequestHandler = async (req, res) => {
  // const newNote = new Note<NoteDocument>({
  //   title: (req.body as IncomingBody).title,
  //   description: (req.body as IncomingBody).description,
  // });

  // await newNote.save();

    const newNote = await Note.create<NoteDocument>({
      
    title: (req.body as IncomingBody).title, // retrieves the title from request body
    description: (req.body as IncomingBody).description,
  });

  res.json({ note:{ id: newNote._id, title: newNote.title, description: newNote.description }});
};

export const updateSingleNote : RequestHandler = async (req, res) => { // to update things inside database, patch is preferebly good choice
   // const { noteId } = req.params; // read unique id's
    //  const note = await Note.findById(noteId);          //Note, is the name of model, check note.ts
    //   if (!note) return res.json({ error: "note not found" })  // if note is not found
    //  const { title, description } = req.body as IncomingBody; //req.body usually contains the data sent by the client in a POST request
    // if(title) note.title = title
    // if (description) note.description = description
    // await note.save();
    
    
    // another method to do it
    
    const { noteId } = req.params; // read unique id's 
    // router.patch("/:noteId", updateSingleNote)
    const { title, description } = req.body as IncomingBody; //req.body usually contains the data sent by the client in a POST request
   
    const note = await Note.findByIdAndUpdate(
        noteId,
        { title, description }, // passing objects
        { new: true }  // will return new updated value to note
    );
    if (!note) return res.json({ error: "note not found" }) // if note is not found
     res.json({ note :{ id: note._id, title: note.title, description: note.description } });  // note will give results to frontend or in this case to postman
}

export const removeSingleNote: RequestHandler = async (req, res) => { // to delete things inside database
    const { noteId } = req.params; // read unique id's

    const removedId = await Note.findByIdAndDelete(noteId);
    if (!removedId) return res.json({ error: "couldn't remove note!" })
    
    res.json({message:"Note removed successfully"})

}

export const getSingleNote : RequestHandler =  async (req, res) => { // to find single note inside database 
    const { id } = req.params;
    const note = await Note.findById(id);
    if(!note) return res.json({error:"note not found"})
    res.json({note});
}

export const getAllNotes : RequestHandler =  async (req, res) => { // will find all notes inside database 
    const notes = await Note.find();
    res.json({
        notes: notes.map((note) => {
            return {
                id: note._id,
                title: note.title,
                description: note.description
        }
    }) });
}