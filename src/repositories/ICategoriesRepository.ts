import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
  }
interface ICatergoriesRepository {
    findname(name: string): Category;
    create({name, description}: ICreateCategoryDTO): void;
    list(): Category[];
}

export { ICatergoriesRepository, ICreateCategoryDTO };

