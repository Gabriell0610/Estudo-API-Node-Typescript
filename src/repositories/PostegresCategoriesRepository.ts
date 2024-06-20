import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./CategoryRepository";
import { ICatergoriesRepository } from "./ICategoriesRepository";


class PostegresCategoriesRepository implements ICatergoriesRepository {
    findname(name: string): Category {
        return null
    }
    create({ name, description }: ICreateCategoryDTO): void {
        
    }
    list(): Category[] {
        return null
    }
    
}

export { PostegresCategoriesRepository };

