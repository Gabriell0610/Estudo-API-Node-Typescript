import { ICatergoriesRepository } from "../../repositories/ICategoriesRepository";
import { ICreateSpecificationDTO } from "../../repositories/ISpecificationRepository";



class CreateCategoryUseCase {
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

