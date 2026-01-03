"use client";

import Input from "./components/Input";
import { criarArquivo } from "./criarArquivo";

export default function Home() {

  return (
    <div className="flex bg-black min-h-screen w-full items-center justify-center">
      <form className="bg-white/[0.05] w-[90%] h-[90vh] rounded-lg shadow-xl text-white flex p-8 flex-col gap-5" action={criarArquivo}>
        <Input name="nome" required>Nome do Aplicativo</Input>
        <Input name="descricao">Descrição do Aplicativo</Input>
        <Input name="id" required>ID do Aplicativo (pode ser o nome do aplicativo sem espaços)</Input>
        <Input name="icone" type="file">Ícone do Aplicativo</Input>
        <Input name="executavel" type="file" required>Executável do Aplicativo</Input>
        <Input name="caminho" required>Caminho da Pasta do Aplicativo</Input>
        <button className="bg-white/[0.05] hover:bg-white/[0.1] transition-colors duration-250 text-sm font-bold p-1" type="submit">Gerar</button>
      </form>
    </div>
  );
}
