import fs from "fs";


class ImportCategoryUseCase {

    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path);
        
        // O pipe serve para pegar os dados que estão sendo lidos pelo stream e joga esses dados para um lugar específico
        //stream.pipe()
    }
}

export { ImportCategoryUseCase };

