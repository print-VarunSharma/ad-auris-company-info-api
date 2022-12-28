import * as express from "express";
import { RevenueController } from "../../../controllers/revenue.controllers";
const router = express.Router();

router.get("/revenue/:date", RevenueController.getRevenueData);
router.get("/revenues", RevenueController.getAllRevenueData);

export default router;
