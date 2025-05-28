import express, { Application, Request, Response } from "express";

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.get("/", (_req: Request, res: Response) => {
      res.send("Hello World");
    });
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`[API] running on http://localhost:${port}/ `);
    });
  }
}
