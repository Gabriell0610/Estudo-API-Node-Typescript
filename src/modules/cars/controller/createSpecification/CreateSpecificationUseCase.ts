import { ICreateSpecificationDTO } from "../../repositories/ISpecificationRepository";
import { SpecificationRepository } from "../../repositories/implemetations/SpecificationRepository";

class CreateSpecificationUseCase {
    
    constructor(private specificationRepository: SpecificationRepository) {}

    execute({name, description}: ICreateSpecificationDTO) {

        const specificationAlredyExits = this.specificationRepository.findByName(name)

        if(specificationAlredyExits) {
            throw new Error("Specification Alredy Exits")
        }

        this.specificationRepository.create({name, description})
    }   
}


export { CreateSpecificationUseCase };

