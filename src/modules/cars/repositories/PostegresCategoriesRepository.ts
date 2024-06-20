import { Category } from "../model/Category";

import {
  ICatergoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostegresCategoriesRepository implements ICatergoriesRepository {
  findName(name: string): Category {
    console.log(name);
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
  list(): Category[] {
    return null;
  }
}

export { PostegresCategoriesRepository };
