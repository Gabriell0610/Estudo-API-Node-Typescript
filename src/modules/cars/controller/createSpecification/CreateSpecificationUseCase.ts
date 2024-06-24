import { ICreateSpecificationDTO, ISpecificationRepository } from "../../repositories/ISpecificationRepository";


class CreateSpecificationUseCase {
    
    //Aplicando a Inversão de depêndencia e Princípio de Substituição do SOLID
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute({name, description}: ICreateSpecificationDTO) {

        const specificationAlredyExits = this.specificationRepository.findByName(name)

        if(specificationAlredyExits) {
            throw new Error("Specification Alredy Exits")
        }

        this.specificationRepository.create({name, description})
    }   
}


export { CreateSpecificationUseCase };

