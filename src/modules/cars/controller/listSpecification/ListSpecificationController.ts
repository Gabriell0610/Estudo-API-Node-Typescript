import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";


class ListSpecificationController {

    constructor(private listSpecificationUseCase: ListSpecificationUseCase){}

    handle(req: Request, res: Response): Response {
        const data = this.listSpecificationUseCase.execute() 
    
        return res.json(data)
    }
}


export { ListSpecificationController };

