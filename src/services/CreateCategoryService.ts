import { CategoriesRepository } from "../repositories/CategoryRepository";

interface IRequest {
    name: string,
    description: string
}
 

class CreateCategoryService {
    
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ name, description}: IRequest): void {
       
        const categoryAlredyExists = this.categoriesRepository.findName(name)

        if(categoryAlredyExists) {
          throw new Error("Category Alredy exists!")
        }
      
        this.categoriesRepository.create({ name, description });
    }
}


export { CreateCategoryService };

