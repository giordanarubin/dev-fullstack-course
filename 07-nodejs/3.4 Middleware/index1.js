import express from "express";
//imports para acessar diretórios no servidor e pegar os arquivos necessários para enviar para o client side para mostrar o site
import { dirname } from "path"; 
import { fileURLToPath } from "url";
//import do middleware
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
}); //busca (get) o arquivo do diretorio selecionado no servidor e envia (sendFile)

app.post("/submit", (req, res) => {
  console.log(req.body);//agora depois de usar o body parser a requisição tem essa propriedade "body" que é meio que seu conteudo "cru", a ser analisado
});//pega o conteudo do formulario quando o usuario clica no botao submit

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
