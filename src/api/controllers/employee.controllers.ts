import { Request, Response, NextFunction } from "express";
import EmployeeService from "../services/employee.services";

export class EmployeeController {
    public static getEmployeeProfileData(req: Request, res: Response, next: NextFunction) {
        try {
            const data = EmployeeService.employeeProfileData();
            res.send(data).status(200);
        } catch (e) {
            throw e;
        }
    }
}
