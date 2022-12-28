import * as express from "express";
import { EmployeeController } from "../../../controllers/employee.controllers";

const router = express.Router();

router.get("/profile", EmployeeController.getEmployeeProfileData);
router.get("/profiles", EmployeeController.getAllEmployeeProfileData);
export default router;
