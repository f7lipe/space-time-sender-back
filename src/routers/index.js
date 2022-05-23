import { Router } from "express";

import gateRouter from "./Gate/gateRouter.js";

const router = Router()
router.use(gateRouter)

export default router