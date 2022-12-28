import * as express from "express";
import { InvestorController } from "../../../controllers/investor.controllers";

const router = express.Router();

router.get("/profile", InvestorController.getInvestorData);
router.get("/profiles", InvestorController.getAllInvestorData);

export default router;
