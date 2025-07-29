export async function verificaErros( resp ) {
    if(resp.ok)
        return;
    switch(resp.status) {
        case 400:throw new Error("Erro de dominio (400).");
        case 404:throw new Error("Recurso não encontrado (404).");
        case 405:throw new Error("Método não permitido (405).");
        case 409:throw new Error("Conflito de dados (409).");
        case 500:throw new Error("Erro interno do servidor (500).");
        default:throw new Error("Erro desconhecido. ");
    }  
}