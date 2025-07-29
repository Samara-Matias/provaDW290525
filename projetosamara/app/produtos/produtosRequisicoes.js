import { verificaErros } from "../utilErrosDoServidor.js";

export async function listar(){
    const uri = '../../api/controller/listar.php';
    try{
        let resposta = await fetch(uri);
        await verificaErros( resposta );
        return await resposta.json();
    }catch( erro ){
        alert(erro);
    }
}

export async function inserir( produto ){
    const uri = '../../api/controller/inserir.php';
    const opcoes = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(produto)
    }

    try{
        let resposta = await fetch(uri, opcoes);
        await verificaErros( resposta );
        return await resposta.json();
    }catch (erro){
        alert( erro );
    }
}