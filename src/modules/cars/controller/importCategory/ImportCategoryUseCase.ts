import { parse } from "csv-parse";
import fs from "fs";
import { ICatergoriesRepository } from "../../repositories/ICategoriesRepository";


interface IImportCategories {
    name: string,
    description: string
}


class ImportCategoryUseCase {

    constructor(private categoriesRepository: ICatergoriesRepository){}

    // Função responsável por fazer a leitura e retornar os arquivos
    readCategory(file: Express.Multer.File): Promise<IImportCategories[]>  {

        return new Promise ((resolve, reject) => {
            // faz a leitura de cada arquivo pelo caminho
            const stream = fs.createReadStream(file.path);

            const categories: IImportCategories[] = []
            
            // transforma o arquivo lido pela stream em um objeto para ser manipulado
            const parseFile = parse()

            // Conecta o stream de leitura ao parse de CSV
            stream.pipe(parseFile)

            // O evento data lê e processa uma linha (ou registro) do CSV
            parseFile.on("data", (line) => {
                const [ name, description ] = line
                categories.push({
                    name,
                    description
                })
            })
            .on("end", () => {
                // Quando o processamento termina, resolve a promessa com os dados lidos e remove os arquivos temporários
                fs.promises.unlink(file.path)
                resolve(categories)
            })
            .on("error", (err) => {
                // Em caso de erro, rejeita a promessa
                reject(err)
            })
        })
    }

    //Função responsável por salvar os dados no banco de dados
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.readCategory(file)
        
        categories.map((data) => {
            const { name, description} = data
            const exitsCategory = this.categoriesRepository.findByName(name)

            if(!exitsCategory) {
                this.categoriesRepository.create({name, description})
            }
        })

    }
}

export { ImportCategoryUseCase };

