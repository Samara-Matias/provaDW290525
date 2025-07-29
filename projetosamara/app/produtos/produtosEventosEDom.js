import { listar, inserir } from "./produtosRequisicoes.js";

//###########AQUI REGISTRAREMOS OS EVENTOS###################

document.addEventListener('DOMContentLoaded', async () => {
    let registros = await listar();
    montarTabela(registros);
});

let form = document.querySelector('#form-produtos');

// VERIFICANDO O FORMULÁRIO
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // PEGAR OS DADOS ENVIADOS
    let produto = {
        id: document.querySelector('#id').value,
        descricao: document.querySelector('#descricao').value,
        precoDeCusto: document.querySelector('#precoDeCusto').value
    }

    // ENVIANDO OS DADOS PARA SEREM INSERIDOS NO BANCO DE DADOS
    await inserir(produto);

    form.reset();

    let registros = await listar();
    montarTabela(registros);
});

//###########FIM DO REGISTRO DOS EVENTOS###################

//###########Funções auxiliares para montagem do DOM###############
function montarTabela( registros ){
    const corpoTabela = document.querySelector("#tbl-produtos tbody");
    //Enquanto o elemento tbody tiver um filho, remova este filho
    while(corpoTabela.firstChild)
        corpoTabela.removeChild(corpoTabela.firstChild);
    //Depois de limpar o elemento tbody da tabela....
    
    //Percorra os registros montando as linhas (forma simples, sem map)
    registros.forEach(registro => {
        const linhaTabela =document.createElement('tr');

        const colunaId = document.createElement('td');
        colunaId.textContent = registro.id;
        const colunaDescricao = document.createElement('td');
        colunaDescricao.textContent = registro.descricao;
        const colunaPrecoDeCusto = document.createElement('td');
        colunaPrecoDeCusto.textContent = registro.precoDeCusto;

        //append pendura vários nós em um mesmo elemento ao mesmo tempo
        linhaTabela.append(colunaId,colunaDescricao,colunaPrecoDeCusto);
        //Pendura cada linha criada ao corpo da tabela
        corpoTabela.appendChild(linhaTabela); 
    });
}