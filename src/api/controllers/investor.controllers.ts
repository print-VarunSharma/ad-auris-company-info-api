import { Request, Response, NextFunction } from "express";
import InvestorService from "../services/investor.services";

export class InvestorController {
    public static getInvestorData(req: Request, res: Response) {
        try {
            const data = InvestorService.investorProfileData();
            res.send(data).status(200);
        } catch (error) {
            throw error;
        }
    }

    public static getAllInvestorData(req: Request, res: Response) {
        try {
            const data = InvestorService.allInvestorProfileData();
            res.send(data).status(200);
        } catch (error) {
            throw error;
        }
    }
}
