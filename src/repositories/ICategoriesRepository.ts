import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
interface ICatergoriesRepository {
  findName(name: string): Category;
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
}

export { ICatergoriesRepository, ICreateCategoryDTO };
