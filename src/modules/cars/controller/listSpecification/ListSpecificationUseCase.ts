import { Specification } from "../../model/Specification";
import { SpecificationRepository } from "../../repositories/implemetations/SpecificationRepository";



class ListSpecificationUseCase {

    constructor(private SpecificationRepository: SpecificationRepository) {}

    execute(): Specification[] {
        const Specification = this.SpecificationRepository.list()
        return Specification
    }
}


export { ListSpecificationUseCase };

