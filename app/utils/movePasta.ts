import { resolve } from "path";
import os from "os"
import fs from "fs-extra";

async function movePasta(origem: string, nome: string) {
    const caminhoOrigem = resolve(origem)
    const caminhoAlvo = resolve(`${os.homedir()}/.local/share/${nome}`)

    try {
        await fs.move(caminhoOrigem, caminhoAlvo);
        console.log('Pasta movida com sucesso!')
    } catch (err) {
        console.error(err)
    }
}

export default movePasta