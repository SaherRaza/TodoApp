import { Router } from "express";
import { updateSingleNote , create,removeSingleNote, getAllNotes, getSingleNote} from "../controllers/note";

const router = Router();

router.post("/create", create);

router.patch("/:noteId", updateSingleNote)


router.delete("/:noteId", removeSingleNote)

router.get("/", getAllNotes )


router.get("/:id", getSingleNote)

export default router;