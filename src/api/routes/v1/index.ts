import * as express from "express";
import employee from "./employee";
import revenue from "./revenue";

const router = express.Router();
router.use("/employees", employee);
router.use("/finances", revenue);

export default router;
