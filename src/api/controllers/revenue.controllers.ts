import { Request, Response, NextFunction } from "express";
import RevenueService from "../services/revenue.services";

export class RevenueController {
    public static getRevenueData(req: Request, res: Response, next: NextFunction) {
        try {
            const data = RevenueService.revenueData();
            res.send(data).status(200);
        } catch (error) {
            throw error;
        }
    }

    public static getAllRevenueData(req: Request, res: Response, next: NextFunction) {
        try {
            const data = RevenueService.AllRevenueData();
            res.send(data).status(200);
        } catch (error) {
            throw error;
        }
    }
}
