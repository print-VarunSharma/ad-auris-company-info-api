import { Request, Response, Application } from "express";
import v1 from "./v1";

export class Routes {
    public routes(app: Application): void {
        app.route("/healthcheck").get((req: Request, res: Response) => {
            res.status(200).send("Health Checked!");
        });

        app.use("/v1", v1);
    }
}
