import { Category } from "../../model/Category";

import {
  ICatergoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICatergoriesRepository {
  private categories: Category[];

  //Aplicando o Singleton Pattern
  private static INSTANCE: CategoriesRepository // Instacia estática
  
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if(!CategoriesRepository.INSTANCE) { //Se a instância não existir ela recebe uma instância da classe
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE //caso exista a instância ela é retornada
  }

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

  list(): Category[] {
    return this.categories;
  }

  findName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };

