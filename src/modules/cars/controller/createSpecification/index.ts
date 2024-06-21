import { SpecificationRepository } from "../../repositories/implemetations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationRepository = SpecificationRepository.getInstace()
const createsSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationController(createsSpecificationUseCase)


export { createSpecificationController };

