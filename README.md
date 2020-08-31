# Programa montado seguindo a arquitetura S.O.L.I.D. e TDO
### Sua funcionalidade é apesas receber um post no endpoint contendo dados de um novo usuário salvar numa variável e enviar um email de confirmação de cadastro
Desenvolvido totalmente em TypeScript e 100% Orientado a Objeto 

### Request
- *endpoint:* <https://localhost:3333/users>
- *Metodo:* POST

### Body JSON
```json
{
	"name": "Nome desejado",
	"email": "exemplo@gmail.com",
	"password":"123456"
}
```

## Retorno 
- Quando for Salvo novo contato e enviado o email com sucesso 
Status Code 201

- Quando der algum erro
Status Code 400 ou 500
```json
{
  "message":"<mensagem descrevendo o motivo do erro>"
}
```