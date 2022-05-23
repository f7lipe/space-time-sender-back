import { Router } from "express";
import { getFiles } from "../../controllers/gateController.js";
import {upload} from "../../middlewares/Gate/gateMulter.js";

const gateRouter = Router()


gateRouter.post('/gate', upload.array("files"), getFiles)

export default gateRouter