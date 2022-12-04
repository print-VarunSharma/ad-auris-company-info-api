import { Request, Response, Application } from "express";

export class Routes {
    public routes(app: Application): void {
        app.route("/healthcheck").get((req: Request, res: Response) => {
            res.status(200).send("Health Checked!");
        });
    }
}
