import { dirname, resolve } from "path"
import { Values } from "../types/formValues"
import os from "os"
import { mkdir, writeFile } from "fs/promises"
import { NextResponse } from "next/server"

async function criaDesktop(values: Values, nomeIcone: string) {
    try {
        const caminho = `${os.homedir()}/.local/share`
    const content = `[Desktop Entry]
Name=${values.nome}
Type=Application
StartupWMClass=${values.executavel.name}
Exec=${resolve(`${os.homedir()}/.local/share/${values.id}/${values.executavel.name}`)}
${values.icone.size !== 0 ? `Icon=${resolve(`${caminho}/icons/${nomeIcone}`)}`:""}
${values.descricao ? `Description=${values.descricao}`:""}`
    const dotdesktop = resolve(`${caminho}/applications/${values.id}.desktop`)
    await mkdir(dirname(dotdesktop), { recursive: true })

    await writeFile(dotdesktop, content, { encoding: 'utf-8', mode: 0o755 })
    return NextResponse.json({
        success: true,
        message: `Arquivo criado em: ${dotdesktop}`
    })
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {success: false, error: "Erro ao criar o arquivo"},
            {status: 500}
        )
    }
}

export default criaDesktop;