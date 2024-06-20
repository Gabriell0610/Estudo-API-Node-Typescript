import { Category } from "../model/Category";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  //criando as categorias
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    //o método Object.assign está sendo usado para adicionar propriedades ao objeto instanciado da classe Category
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  //listando as categorias
  list(): Category[] {
    return this.categories
  }

  // percorrendo o array e pegando objetos que contenham o nome igual ao que está sendo criado
  findName(name: string): Category {
    const category = this.categories.find(category => category.name === name)
    return category
  }
}

export { CategoriesRepository, ICreateCategoryDTO };

