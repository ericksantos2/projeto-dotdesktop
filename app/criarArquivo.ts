"use server";
import enviaIcone from "./utils/enviaIcone";
import { Values } from "./types/formValues";
import criaDesktop from "./utils/criaDesktop";
import movePasta from "./utils/movePasta";

export async function criarArquivo(formData: FormData) {
    const values = Object.fromEntries(formData.entries()) as Values;
    const extensao = values.icone.type.match(/\/(.*)$/)
    const nomeIcone = `${values.id}.${extensao && extensao[1]}`
    values.icone.size !== 0 && await enviaIcone(values.icone, nomeIcone)

    await movePasta(values.caminho, values.id)
    await criaDesktop(values, nomeIcone);
}