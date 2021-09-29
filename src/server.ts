import express, { request, response }  from 'express';

const app = express();

/** criar 1º rota - requisições http - Métodos / para q serverm
 * GET - busca
 * POST - salvar 
 * PUT - alterar
 * DELETE - excluir
 * PATCH - alteracao especifica;
*/

app.get("/",(request,response) => {
    //return response.send("Hello World - NLW04");
    return response.json({message: "Hello World Json - NLW 04"});
});

app.post("/", (request, response) => {
    // recebeu os dados
    return response.json({message: "Dados Salvos com Sucesso;"});
});


app.listen(3333, () => console.log("Sever is running!"));
