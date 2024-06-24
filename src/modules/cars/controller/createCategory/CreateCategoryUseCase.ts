import { ICatergoriesRepository } from "../../repositories/ICategoriesRepository";
import { ICreateSpecificationDTO } from "../../repositories/ISpecificationRepository";



class CreateCategoryUseCase {

  //Aplicando a Inversão de depêndencia e Princípio de Substituição do SOLID
  constructor(private categoriesRepository: ICatergoriesRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    const categoryAlredyExists = this.categoriesRepository.findName(name);

    if (categoryAlredyExists) {
      throw new Error("Category Alredy exists!");
    }

    this.categoriesRepository.create({ name, description });
  }

}

export { CreateCategoryUseCase };

