import * as express from "express";
import employees from "./employees";
import revenues from "./revenues";
import investors from "./investors";

const router = express.Router();
router.use("/employees", employees);
router.use("/finances", revenues);
router.use("/investors", investors);
export default router;
