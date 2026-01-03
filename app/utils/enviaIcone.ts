import { writeFile } from "fs/promises";
import { resolve } from "path";
import os from "os"

async function enviaIcone(arquivo: File, nome: string) {
    if (!arquivo || arquivo.size === 0) {
        throw new Error("Nenhum arquivo enviado.")
    }
    const bytes = await arquivo.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = resolve(`${os.homedir()}/.local/share/icons/${nome}`)

    try {
        await writeFile(path, buffer);
        console.log(`Arquivo salvo em ${path}`)
        return { success: true };
    } catch (error) {
        console.error("Erro ao salvar o arquivo:", error);
        return { success: false };
    }
}

export default enviaIcone