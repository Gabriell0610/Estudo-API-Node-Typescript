import { ICreateSpecificationDTO, ISpecificationRepository } from "../repositories/ISpecificationRepository";

class CreateSpecificationService {
  //Aplicando Inversão de Dependência && aplicando Substituitção de Liskov
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({name, description}: ICreateSpecificationDTO): void {
    const specificationAlredyExist = this.specificationRepository.findByName(name)
    
    if(specificationAlredyExist) {
      throw new Error("Specification alredy exits")
    }
    
    this.specificationRepository.create({name, description})
  }
}

export { CreateSpecificationService };

